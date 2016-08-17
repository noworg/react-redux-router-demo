var path = require("path");
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// process.env.NODE_ENV  product or dev
var precss = require('precss');
var autoprefixer = require('autoprefixer');
// css autoprefix
//var precss = require('precss');
//var autoprefixer = require('autoprefixer');
//config.postcss = function() {
//    return [precss, autoprefixer];
//}
//var autoprefixer = require('autoprefixer');
//var precss = require('precss');
var config = {
    //watch: true,
    devtool: 'cheap-module-eval-source-map',
    entry: {
        all: './js/Menu/Menu.jsx',
        react: ['react', 'redux','react-dom', 'react-redux', 'redux-thunk', 'react-router', 'react-router-redux'],
        //react: ['react-dom',]
    },

    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: "bundle.js"
    },

    resolve: {
        extensions: ['', '.js', '.jsx','scss']
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.css$/,
                //loader: 'style!css',
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader")
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    notExtractLoader: "style-loader",
                    loader: "css-loader?sourceMap!sass-loader!postcss-loader",
                })
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192',
            },
            {
                test: /\.svg$/,
                loader: 'url-loader?limit=8192',
            }
        ]
    }
    ,
    //postcss: [autoprefixer({
    //    browsers: ['ie >= 8', 'opera 12.1','ios 6','android 4']
    //})],
    //postcss:[precss, autoprefixer],
    plugins: [
        //分隔文件
        new webpack.optimize.CommonsChunkPlugin('react', 'react.js'),
        new ExtractTextPlugin('s.css'),
        //压缩 提前common文件
        //new webpack.optimize.UglifyJsPlugin({
        //    compress: {
        //        warnings: false
        //    }
        //}),
        //new webpack.DefinePlugin({
        //    "process.env": {
        //        NODE_ENV: JSON.stringify("production")
        //    }
        //}),
    ]
};
module.exports = config;
