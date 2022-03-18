var add1=document.getElementById("add1");
var minus1=document.getElementById("minus1");
var inputnum1=document.getElementById("inputnum1");

add1.onclick=function (){
 inputnum1.value=parseInt(inputnum1.value)+1;
 
};

minus1.onclick=function (){
if(inputnum1.value<=0){
inputnum1.value=0
}else{
inputnum1.value=parseInt(inputnum1.value)-1;
}

};
var add2=document.getElementById("add2");
var minus2=document.getElementById("minus2");
var inputnum2=document.getElementById("inputnum2");

add2.onclick=function (){
 inputnum2.value=parseInt(inputnum2.value)+1;
 
};

minus2.onclick=function (){
if(inputnum2.value<=0){
inputnum2.value=0
}else{
inputnum2.value=parseInt(inputnum2.value)-1;
}

};
var add3=document.getElementById("add3");
var minus3=document.getElementById("minus3");
var inputnum3=document.getElementById("inputnum3");

add3.onclick=function (){
 inputnum3.value=parseInt(inputnum3.value)+1;
 
};

minus3.onclick=function (){
if(inputnum3.value<=0){
inputnum3.value=0
}else{
inputnum3.value=parseInt(inputnum3.value)-1;
}

};

function total(id){
var totalPrice=0;
for(i=1;i<=3;i++){
var inputnum=document.getElementById("inputnum"+i).value;
var price=document.getElementById("price"+i).value;
var smallTotal=price*inputnum;
totalPrice+=smallTotal;
document.getElementById("squantity"+i).textContent=inputnum+"個";

}


var total=document.getElementById("total");
total.innerHTML=totalPrice+"元";

var inputnum=parseInt(document.getElementById("inputnum"+id).value);
var price=document.getElementById("price"+id).value;
var smallTotal=price*inputnum;
var smallT=document.getElementById("smallTotal"+id);
smallT.innerHTML=smallTotal+"元";
}

function sub(){
window.location.reload();
alert('已成功送出訂單！');
}
function sub2(){
window.location.reload();
alert('送出成功，請等待我們的審核通知！');
}


var r=true;
$("#seb").delay(1000).fadeOut("slow");
$("#se").click(function(){
ch();
});

function ch(){
$("#seb").toggle(function(){
if(r){
$("#se img").attr('src','image/se2.png');
r=!r;
}else{
$("#se img").attr('src','image/se1.png');
r=!r;
}
});
}

function keyin(){
var keyCode=event.which;
if(keyCode==13){
$("#sef").append('<div class="m2">'+document.getElementById("cuw").value+'</div><br>');
$("#cuw").val("");
appw();
event.preventDefault();
}

}

function appw(){
setTimeout(function(){
$("#sef").append(app());
var e=document.getElementById("cuw");
e.scrollTop=e.scrollHeight;
e.scrollLeft=e.scrollLeft;
},500)
}

function app(){
var c=Math.floor(Math.random()*3);
if(c%3==0){
return '<div class="m1">歡迎光臨本站，有任何問題都歡迎問我喔！</div><br>'
}
if(c%3==1){
return '<div class="m1">謝謝您的指教，我們會立即請專人回復您。</div><br>'
}
if(c%3==2){
return '<div class="m1">忙線中，請稍後再試。</div><br>'
}
}

$('[data-toggle="tooltip"]').tooltip();












