// Side Nav For Tablet & Mobile
let show=document.querySelector(".responsive_navbar .menu_btn");
let close=document.querySelector(".submenu .close_btn");
let menu=document.querySelector(".submenu")

show.addEventListener("click",()=>{
    menu.classList.toggle("right-0")
});
close.addEventListener("click",()=>{
    menu.classList.remove("right-0")
})