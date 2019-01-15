/*
 * @Author: wangxianfeng
 * @Date: 2018-12-31 20:33:20
 * @LastEditors: wangxianfeng
 * @LastEditTime: 2018-12-31 21:05:09
 * @Description: 
 */
var zh=document.getElementById('zh');
var psw=document.getElementById('psw');
var sbtn=document.getElementById('sbtn');
sbtn.onclick=function(){
    var zhval=zh.value;
    var pswval=psw.value;
     if(zhval==="123456"&&pswval==="123")
     {
          window.location.href="index.html"; 
        // alert('ok');
    }
    else{
        alert('账号或密码输入错误，请重新输入！');
    }
}