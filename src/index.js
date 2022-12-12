import $ from 'jquery'
// 导入样式文件
import './css/index.css'
// 导入图片路径
import wx from './images/wx.png'
// 导入less文件
import './index.less'
// jquery入口函数
$(function() {
$('li:odd').css('background-color','yellow')
$('li:even').css('background-color','green')
$('.pic').attr('url',wx)

function info(target) {
    // 为目标添加动态属性
    target.info = 'Person info'
}
// 为person类 应用info装饰器
@info
class Person {}
// 打印Person的静态属性info
console.log(Person.info)
})