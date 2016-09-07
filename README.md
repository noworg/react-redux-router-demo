# react-redux-router-demo


案例使用react,redux,router框架

将项目clone到本地:

1.clone代码 && 进入项目目录
> git clone git@github.com:noworg/react-redux-router-demo.git && cd -redux-router-demo

2.下载依赖
> npm i

3.直接运行
> npm start

热部署
> npm run server

###webpack
demo使用webpack作为打包工具,完整配置在wepack.config.js中        

WEBPACK参数解析:        
        

1.devtool由于配置sourceMap模式        
soureceMap是用于定位压缩合并后js代码位置的文件,devtool包含8个参数        
默认参数cheap-module-eval-source-map,这也是官方推荐的配置        
```js
config.devtool = 'cheap-module-eval-source-map'
```        
2.entry入口文件        
这里可以配置项目的入口文件,        
```js
config.entry.app = 'app.js'
```
还可以将公共的库,包拆分出来      
```js
config.entry.lib = ['react', 'redux', 'react-dom', 'react-redux', 'redux-thunk', 'react-router', 'react-router-redux']
```
3.output文件输出位置
```js
config.output.path = path.resolve(__dirname, 'dist/')//path是nodejs
```
4.resolve用于自动补全后缀,`''`是处理不需要后缀的文件
```js
config.resolve.extensions=['', '.js', '.jsx', '.scss','.css','.png']  
```
5.module用于配置loader
>处理js,es6,jsx,使用babel-loader转换代码

需要在根目录添加.babelrc文件,这里用于转换es6与react代码,带后缀rc的通常都是自动加载的文件         
module配置
```js
config.module.loaders.push({
    test: /\.(js|jsx)$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    include: __dirname
})
```
.babelrc文件配置
```js
{
  "presets": ["es2015", "react"]
}
```

>处理css,sass,使用postcss

需要用到precss和autoprefixer两个插件,用于自动补全浏览器前缀
```js
var precss = require('precss');
var autoprefixer = require('autoprefixer');

config.module.loaders.push({
    test: /\.css$/,
    loader: "style!css!postcss")
})
config.module.loaders.push({
    test: /\.scss$/,
    loader: "style!css!postcss!sass")
})

config.postcss = [precss, autoprefixer]
```

>处理其他文件,使用url-loader,小于8k的文件将会转换为base64

```js
config.module.loaders.push({
    test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
    loader: 'url-loader?limit=8192'
})
```

>插件

1.提取公共库

```js
config.plugins.push(new webpack.optimize.CommonsChunkPlugin('lib', 'react.js'))
```

2.提取css到单独文件

```js
var ExtractTextPlugin = require("extract-text-webpack-plugin");//加载插件
//修改css模块的配置
config.module.loaders.push({
    test: /\.css$/,
    loader: ExtractTextPlugin.extract("style", "css!postcss")
})
config.module.loaders.push({
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract("style", "css!postcss!sass")
})

config.plugins.push(new ExtractTextPlugin('bundle.css'))
```

3.代码压缩

```js
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
                        compress: {
                            warnings: false
                         }
                    }))
```
