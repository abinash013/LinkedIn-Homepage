/*
document.addEventListener('DOMContentLoaded', init, false);

function init(){
const like = document.querySelector(".row6-like");
const likesub = document.querySelector(".likesubdivwrapper");

let flag = true;

like.addEventListener('mouseover',()=>{

likesub.style.display = "block";


});
like.addEventListener('mouseout',()=>{

likesub.style.display = "none";


});

}
*/
document.addEventListener('DOMContentLoaded', start, false);
function start(){
var t = true;
const hs = () =>{

   const ham = document.querySelector(".navbar-hamburger-wrapper");
   const nav = document.querySelector(".navbar-hs");
   const lines = document.querySelector(".navbar-hamburger-wrapper");
   ham.addEventListener('click',()=>{

         if(t){
           nav.style.transform = "translateX(0%)";
         }
         else{
           nav.style.transform = "translateX(-100%)";
         }
         t = !t;
         lines.classList.toggle("toggle");
   });





}
hs();
}
