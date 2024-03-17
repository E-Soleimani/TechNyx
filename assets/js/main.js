// Side Nav For Tablet & Mobile
let show=document.querySelector(".side_nav .menu_bar");
let close=document.querySelector(".close_bar");
let menu=document.querySelector(".hide_menu")

show.addEventListener("click",()=>{
    menu.classList.remove("-right-full")
    menu.classList.add("right-0")
});
close.addEventListener("click",()=>{
    menu.classList.remove("right-0")
    menu.classList.add("-right-full")
})