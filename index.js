const hamburger=document.getElementById('hamburger');
const close=document.getElementById('close');
const ul_mobile=document.getElementById('ul_mobile');
//console.log(ul_mobile);
hamburger.addEventListener('click', ToggleMenu);
close.addEventListener('click', ToggleMenu);
function ToggleMenu(){
    hamburger.classList.toggle("show");
    close.classList.toggle("show");
    ul_mobile.classList.toggle("hide"); 
}