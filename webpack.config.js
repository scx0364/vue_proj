const path = require('path') // path是node.js中专门操作路径的模块
const HtmlPlugin = require('html-webpack-plugin') // 1.导入html插件，得到一个构造函数
// 2.new构造函数，创建实例对象
const htmlPlugin = new HtmlPlugin({
  template: './src/index.html', // 指定原文件的存放路径
  filename: './index.html' // 指定生成的文件的存放路径
})
// 导入clean-webpack-plugin 插件，得到一个构造函数
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // const后面的花括号表示解构赋值
module.exports = {
    mode: 'development',

    // entry: path.join(__dirname,'./src/index.js'), // 打包的入口文件（我们写源代码的地方）
    output: {
        path: path.join(__dirname,'./dist'), //输出文件的存放路径
        filename: 'js/main.js' // 输出文件的名称 
    },
    // 插件数组，插件的引入都放到这里
    plugins: [htmlPlugin,new CleanWebpackPlugin()], // 3.向外导出实例对象
    devServer: {
        
        static: {
          directory: path.join(__dirname, "/"),
        },

        open: true, // 首次打包完成后，自动打开浏览器
        host: '127.0.0.1', // 实时打包所使用的主机地址
        port: 80 // 实时打包所使用的端口号
      },
    module: {
      rules: [
        {test: /\.css$/,use: ['style-loader','css-loader'] },
        {test: /\.jpg|png|gif$/,use: 'url-loader?limit=900&outputPath=image'},
        {test: /\.less$/,use: ['style-loader','css-loader','less-loader']},
        {test: /\.js$/,use: 'babel-loader',exclude: /node_modules/}
      ]
    }

}