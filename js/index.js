var pic=document.getElementById("pic");
var preBtn=document.getElementsByClassName("btn")[0];
var nextBtn=document.getElementsByClassName("btn")[1];
preBtn.onclick=function()
{
    n--;
    if(n==0)
    {
        n=4;
    }
    pic.src="imgs/"+n+".png"
}
nextBtn.onclick=function(){
    picLunH();
}
var n=1;
function picLunH(){
    n++;
    if(n==5)
    {
        n=1;
    }
    pic.src="imgs/"+n+".png"
}
setInterval(picLunH,15000);