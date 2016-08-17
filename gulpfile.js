var gulp = require('gulp'),
    browserify = require('browserify'),                         //打包工具
    source = require('vinyl-source-stream'),
    watchify = require('watchify'),                             //文件监听
    babelify = require("babelify"),                             //js转换
    buffer = require('vinyl-buffer'),
    sourcemaps = require('gulp-sourcemaps'),
    assign = require('lodash.assign'),                          //es6数组合并
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),                            //- 多个文件合并为一个；
    minifyCss = require('gulp-minify-css'),                     //- 压缩CSS为一行；
//rev = require('gulp-rev'),                                    //- 对文件名加MD5后缀
//revCollector = require('gulp-rev-collector');                   //- 路径替换
    plumber = require('gulp-plumber'),                          //异常中断继续执行
    browsersync = require('browser-sync'),                      //浏览器同步
    sass = require('gulp-ruby-sass'),                           //编译sass
    gulpFilter = require('gulp-filter'),
    autoprefixer = require('gulp-autoprefixer'),                 //css3浏览器前缀
    shell = require('gulp-shell'),
    uglify = require('gulp-uglify'),                                //js压缩
    lodash = require('lodash'),
    envify = require('loose-envify/custom');


var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
//初始化browserify

gulp.task("webpack", function (callback) {
    console.log('==> webpack <==    ')
    var myConfig = Object.create(webpackConfig);
    // run webpack
    return webpack(
        // configuration
        myConfig
        , function (err, stats) {
            // if(err) throw new gutil.PluginError("webpack", err);
            // gutil.log("[webpack]", stats.toString({
            //     // output options
            // }));
            callback();
        });
});

// 生成js/css-监听模式
gulp.task('watch:webpack', function () {
    var waWebpackConfig = lodash.merge(webpackConfig, {
        watch: true
    })
    webpack(waWebpackConfig).watch(200, function (err, stats) {
        //compileLogger(err, stats);
        console.log("webpack --watch finish")
    });
});

//
//gulp.task("webpack", shell.task(
//    ['npm run watch']
//));
//

var customOpts = {
    entries: ['./js/Menu/Menu.jsx'],
    debug: true
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));
b.transform(babelify, {presets: ["es2015", "react"]});
//生产模式
process.env.NODE_ENV = 'production';
b.transform(envify({
    //_: 'purge',
    //NODE_ENV: 'development',
    NODE_ENV: 'production'
}));

function bundle() {

    console.log('==> 打包js <==    ')
    return b.bundle()
        // 如果有错误发生，记录这些错误
        //.on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('bundle.js'))
        // 可选项，如果你不需要缓存文件内容，就删除
        .pipe(buffer())
        .pipe(uglify())
        // 可选项，如果你不需要 sourcemaps，就删除
        .pipe(sourcemaps.init({loadMaps: true})) // 从 browserify 文件载入 map
        // 在这里将变换操作加入管道
        .pipe(sourcemaps.write('./')) // 写入 .map 文件

        .pipe(gulp.dest('./dist'));
}


gulp.task('js', bundle); // 这样你就可以运行 `gulp js` 来编译文件了
//b.on('update', bundle); // 当任何依赖发生改变的时候，运行打包工具
b.on('log', gutil.log); // 输出编译日志到终端

var sassConfigs = {
    src: ['./css/sass/*.*'],
    dest: './css/stylesheets',
    options: {
        noCache: true,
        compass: true,
        bundleExec: false,
        sourcemap: true
    }
};
var autoprefixerConfig = {
    browsers: [
        'last 2 versions',
        'safari 5',
        'ie 8',
        'ie 9',
        'opera 12.1',
        'ios 6',
        'android 4',
        'firefox >= 20'
    ],
    cascade: true
}

function parseSass() {
    console.log("==> 编译sass <==   ")
    var sassConfig = sassConfigs.options;

    sassConfig.onError = browsersync.notify;

    // Don’t write sourcemaps of sourcemaps
    var filter = gulpFilter(['*.css', '!*.map'], {restore: true});

    browsersync.notify('Compiling Sass');

    return sass(sassConfigs.src, sassConfig)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(autoprefixer(autoprefixerConfig))
        .pipe(filter) // Don’t write sourcemaps of sourcemaps
        .pipe(sourcemaps.write('.', {includeContent: false, sourceRoot: 'app/_assets/scss'}))
        .pipe(filter.restore) // Restore original files
        .pipe(gulp.dest(sassConfigs.dest))                      //输出到目标文件夹
        .pipe(concat('wap.css'))                            //- 合并后的文件名
        //.pipe(minifyCss())                                    //- 压缩处理成一行
        //.pipe(rev())                                          //- 文件名加MD5后缀
        .pipe(gulp.dest('./css/stylesheets'))                              //- 输出文件本地
    //.pipe(rev.manifest())                                 //- 生成一个rev-manifest.json
    //.pipe(gulp.dest('../css/rev'));                       //- 将 rev-manifest.json 保存到 rev 目录内
}

gulp.task('sass:watch', function () {
    gulp.watch('./css/sass/*.scss', parseSass);
    return parseSass()//首先执行一遍parseSass
});

//合并css
gulp.task('css', function () {                                //- 创建一个名为 concat 的 task
    gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.css', './css/stylesheets/wap.css'])    //- 需要处理的css文件，放到一个字符串数组里
        .pipe(concat('wap.min.css'))                            //- 合并后的文件名
        .pipe(minifyCss())                                      //- 压缩处理成一行
        //.pipe(rev())                                            //- 文件名加MD5后缀
        .pipe(gulp.dest('./dist'))                               //- 输出文件本地
    //.pipe(rev.manifest())                                   //- 生成一个rev-manifest.json
    //.pipe(gulp.dest('../css/rev'));                              //- 将 rev-manifest.json 保存到 rev 目录内
});

function csss() {
    console.log("==> 合并css <==  ")
    gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.css', './css/stylesheets/wap.css'])    //- 需要处理的css文件，放到一个字符串数组里
        .pipe(concat('wap.min.css'))                            //- 合并后的文件名
        .pipe(minifyCss())                                      //- 压缩处理成一行
        //.pipe(rev())                                            //- 文件名加MD5后缀
        .pipe(gulp.dest('./dist'))                               //- 输出文件本地
    //.pipe(rev.manifest())                                   //- 生成一个rev-manifest.json
    //.pipe(gulp.dest('../css/rev'));                              //- 将 rev-manifest.json 保存到 rev 目录内
}
gulp.task('csscon', ['sass:watch'], function () {
    gulp.watch('./css/stylesheets/wap.css', csss);
    return csss()
});

//js 或者 webpack
gulp.task('work', ['watch:webpack', 'csscon'], function () {

})





