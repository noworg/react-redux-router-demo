//热部署webpack配置
var path = require("path");
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

// process.env.NODE_ENV  product or dev

var config = {
        watch: true,
        devtool: 'cheap-module-eval-source-map',
        entry: [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            './js/Menu/Menu.jsx'
        ],

        output: {
            path: path.resolve(__dirname, 'dist/'),
            filename: "bundle.js",
            publicPath: '/dist/'
        }
        ,

        resolve: {
            extensions: ['', '.js', '.jsx']
        }
        ,

        module: {
            loaders: [
                {
                    test: /\.(js|jsx)$/,
                    loaders: ['react-hot', 'babel-loader'],
                    exclude: /node_modules/,
                    include: __dirname
                },
                {
                    test: /\.css$/,
                    loader: 'style!css',
                },
                {
                    test: /\.scss$/,
                    loader: 'style!css!sass',
                },
                {
                    test: /\.(png|jpg)$/,
                    loader: 'style!css!sass',
                },
                {
                    test: /\.svg$/,
                    loader: 'babel!react-svg',
                }
            ]
        }
        ,

        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': '"development"'
            }),
            //分隔文件
            //new webpack.optimize.CommonsChunkPlugin('react', 'react.js'),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
        ]
    }
    ;
module.exports = config;
