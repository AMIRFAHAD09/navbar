var login_fun = document.getElementById("login_link");
var sign_fun = document.getElementById("sign_link");
var login_box = document.getElementById("login");
var sign_box = document.getElementById("sign_up");
var closeLfrm = document.getElementById("closeLform");
var closeSfrm = document.getElementById("closeSform");
var log_open = document.getElementById("login_open_btn");
var signup_open = document.getElementById("signup_open_btn");
var menu = document.getElementById("menu");
var bar = document.getElementById("bbar");
// this function use for display sign up form
sign_fun.onclick=function()
{
    login_box.style.display="none";
    sign_box.style.display="block";
}

// This function use for display login form
login_fun.onclick=function()
{
    sign_box.style.display="none";
    login_box.style.display="block";
}

// close form using close button
closeLfrm.onclick=function()
{
    login_box.style.display="none";
}
closeSfrm.onclick=function()
{
    sign_box.style.display="none";
}

// login and signup form open from navbar
log_open.onclick=function()
{
    login_box.style.display="block";
    sign_box.style.display="none";
    // menu.style.display="none";
    // setTimeout(function(){
    //     menu.style.display="block";
    // },1000)
}
signup_open.onclick=function()
{
    sign_box.style.display="block";
    login_box.style.display="none";
    // menu.style.display="none";

    // setTimeout(function(){
    //     menu.style.display="block";
    // },1000)
}

// setTimeout(function(){
//     signbtn.innerHTML="sign up";
//     signbtn.style.background="linear-gradient(90deg, rgba(209, 4, 205, 0.896) 0%, rgba(12, 36, 192, 0.947) 100%";
//     sign_frm.reset()
// },2000)
// var bblock = menu.style.display="block";
// var bnone = menu.style.display="none";
// bar.onclick=function()
// {
//     if(menu.style.display==bblock)
//     {
//         menu.style.display="none";
//     }
//     if(menu.style.display==bnone)
//     {
//         menu.style.display="block";
//     }
// }