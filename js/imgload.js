/*
 * @Author: wangxianfeng
 * @Date: 2019-01-15 22:40:07
 * @LastEditors: wangxianfeng
 * @LastEditTime: 2019-01-15 23:20:51
 * @Description: 
 */

$(function(){
function loadImg($img){
    //.attr(值)
    //.attr(属性名称,值)
    $img.attr('src', $img.attr('data-src')) //把data-src的值 赋值给src
    $img.attr('isLoaded', 1)//已加载的图片做标记
}
//判断一个元素是不是出现在窗口(视野)
function isShow($node){
    return $node.offset().top <= $(window).height() + $(window).scrollTop()
}
function start(){
    //.not('[data-isLoaded]')选中已加载的图片不需要重新加载
   $('img').not('[isLoaded]').each(function(){
     var $node = $(this)
     if( isShow($node) ){
       loadImg($node)
     }
   })
}
start()
$(window).on('scroll', function(){
    // setTimeout(function(){
        start()
    // },1000)   
})
//加载图片
})
