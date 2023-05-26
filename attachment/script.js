var loader = document.getElementById("preload");   // preloader start
window.addEventListener("load",function(){
    loader.style.display = "none";
})  // preloader end

document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
 });