const btn=document.getElementById("btn");
const label=document.getElementById("label");

let random;

btn.onclick=function(){
    random=Math.floor(Math.random()*6)+1;
    label.textContent=random;
}