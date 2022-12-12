module.exports = {
    // 声明babel可用的插件,babel-loader在处理文件之前，会先查看是否有插件可以使用
    plugins: [['@babel/plugin-proposal-decorators',{ legacy: true}]]
}