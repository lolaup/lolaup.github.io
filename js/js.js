/*
 * @Author: wangxianfeng
 * @Date: 2018-12-27 10:16:11
 * @LastEditors: wangxianfeng
 * @LastEditTime: 2018-12-28 20:04:58
 * @Description: 
 */
var i=2;
$(function(){
    $(".ig").eq(2).show().siblings().hide();
     show();
    $(".tab").hover(function () {
        index=$(this).index();
        $(".ig").eq(index).fadeIn(0).siblings().fadeOut(0);
        $(".tab").eq(index).addClass('big').siblings().removeClass('big');
        clearInterval(int);
    },function () {
        show();
    })
});
function show () {
    int=setInterval(function () {
            i++;
            if(i==3)
            {
                i=0;
            }
            $(".ig").eq(i).fadeIn(1000).siblings().fadeOut(1000);
            $(".tab").eq(i).addClass('big').siblings().removeClass('big');
        }
        ,3000);
};
