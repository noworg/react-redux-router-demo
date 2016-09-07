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
2.entry入口文件


.babelrc ....babel转换插件所需文件,这里用于转换es6与react代码


