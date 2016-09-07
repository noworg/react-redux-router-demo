var path = require("path");
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var htmlWebpackPlugin = require("html-webpack-plugin");
// process.env.NODE_ENV  product or dev
// css autoprefix
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var config = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        app: './js/Menu.jsx',
        lib: ['react', 'redux', 'react-dom', 'react-redux', 'redux-thunk', 'react-router', 'react-router-redux'],
    },

    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: "bundle.js"
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.scss']
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
                loader: ExtractTextPlugin.extract("style", "css!postcss")
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style", "css!postcss!sass")
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|json)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    postcss: [precss, autoprefixer({
        browsers: ['ie >= 8', 'opera 12.1', 'ios 6', 'android 4']
    })],
    plugins: [
        //分隔文件
        new webpack.optimize.CommonsChunkPlugin('lib', 'react.js'),
        new ExtractTextPlugin('bundle.css'),
        new htmlWebpackPlugin({
            filename: path.resolve(__dirname, 'index.html'),
            chunks: ['app', 'lib'],
            template:  './app.html',
            //minify: {
            //    collapseWhitespace: true,
            //    collapseInlineTagWhitespace: true,
            //    removeRedundantAttributes: true,
            //    removeEmptyAttributes: true,
            //    removeScriptTypeAttributes: true,
            //    removeStyleLinkTypeAttributes: true,
            //    removeComments: true
            //}
        })
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
