$(function(){
    $('.banner_1').hide(1000);
    $('.banner_2').hide(1000);
    $('.banner_3').hide(1000);
    $('.banner_4').hide(1000); 
    os=$('.wenzi_1').offset();
    $(window).scroll(function(){
        feiru();
    })
    
})

function feiru(){
    if($(window).scrollTop()>400 && $(window).scrollTop()<1813)
  {
    $('.banner_1').show(1000);
  }
  else if($(window).scrollTop()>1813 && $(window).scrollTop()<3270){
    $('.banner_2').show(1000);
    // $('.banner_1').hide(1000);
    // $('.banner_3').hide(1000);
    // $('.banner_4').hide(1000); 
  }
  else if($(window).scrollTop()>3270 && $(window).scrollTop()<4695){
    $('.banner_3').show(1000);
    // $('.banner_4').hide(1000);
    // $('.banner_2').hide(1000);
    // $('.banner_1').hide(1000);
  }
  else if($(window).scrollTop()>4695){
    $('.banner_4').show(1000);
    // $('.banner_3').hide(1000);
    // $('.banner_1').hide(1000);
    // $('.banner_2').hide(1000);
  }
//   else{
//     $('.banner_1').hide(1000);
//     $('.banner_2').hide(1000);
//     $('.banner_3').hide(1000);
//     $('.banner_4').hide(1000);   
//   }
}