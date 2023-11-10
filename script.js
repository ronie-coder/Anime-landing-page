var main1 = document.querySelector('#main')
var crsr =  document.querySelector('.cursor')
main1.addEventListener("mousemove", function(dets){
 crsr.style.left = dets.x+"px"
 
 crsr.style.top = dets.y+"px"
 
})

var a = document.querySelector("#nav_first img")
var b = document.querySelector("#hover1")

a.addEventListener("mousemove", function(dets){
  b.style.left = dets.x+"px" 
  b.style.top = dets.y+"px" 
})
a.addEventListener("mouseenter", function(dets){
  b.style.opacity = 1
 

})
a.addEventListener("mouseleave", function(dets){
  b.style.opacity = 0
 

})

var w = document.querySelectorAll(".item")



w.forEach(function(val){

var i = 0;

val.childNodes[5].addEventListener("click", function(){
if(i == 0){
val.childNodes[5].style.backgroundColor = "black"
val.childNodes[5].innerHTML = "Remove from Cart"
val.childNodes[3].style.transform = 'translate(-50%, -50%) scale(1)'
i = 1;
setTimeout(function(){
    val.childNodes[3].style.transform = 'translate(-50%, -50%) scale(0)'
}, 800)}else{


val.childNodes[5].innerHTML = "Add to Cart"
val.childNodes[5].style.backgroundColor = "red"
i=0
}
})

})

document.querySelector("#overlay #overlay_right").addEventListener("click",function(){
gsap.to("#overlay",{
left:"-100%",
duration:1.5
})
})
const sFront = 50;
const sBack = 300;
var w = document.querySelector("#overlay")
w.addEventListener("mousemove",e =>{
const f = e.clientX;
const g = e.clientY;
w.style.transform = `
translate(
${f/sBack}%,
${g/sBack}%

)`;
})
var q = document.querySelector("#overlay_right")
q.addEventListener("mousemove",e =>{
const f = e.clientX;
const g = e.clientY;
q.style.transform = `
translate(
${f/sFront}%,
${g/sFront}%

)`;
})