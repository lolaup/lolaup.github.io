$(function(){
   $(".i1").click(function(){
       dingwei($('.wenzi'));
   });
   $(".i2").click(function(){
    dingwei($('.wenzi_1'));
   })
   $(".i3").click(function(){
    dingwei($('.wenzi_2'));
   })
   $(".i4").click(function(){
    dingwei($('.wenzi_3'));
   })
   $("#up").click(function(){
    $("html,body").stop().animate({
        "scrollTop": 0
    },1000)
   })
});

function dingwei(m)
{
        x=m.offset();
        // $(window).scrollTop(x.top);   
        $("html,body").stop().animate({
            "scrollTop": x.top
        },1000)
}  