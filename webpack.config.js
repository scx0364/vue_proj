const path = require('path') // path是node.js中专门操作路径的模块
module.exports = {
    mode: 'development',
    // entry: path.join(__dirname,'./src/index.js'), // 打包的入口文件（我们写源代码的地方）
    // output: {
    //     path: path.join(__dirname,'./dist'), //输出文件的存放路径
    //     filename: 'main.js' // 输出文件的名称 
    // }
    devServer: {
        // contentBase: __dirname, -- 请注意，这种写法已弃用
        static: {
          directory: path.join(__dirname, "/"),
        },
      }

}