'use strict';
            // TOGGLE NAVBAR
const menu = document.getElementById('menu');
const menu_button = document.getElementById('menu_button');
const close_menu = document.getElementById('close__menu');
let toggler = false;

function toggleMenu(){
    toggler = !toggler;
    toggler ? menu.style.display = 'flex' : menu.style.display = 'none'; 
    console.log(toggler)
}

menu_button.addEventListener("click", toggleMenu);
close_menu.addEventListener("click", toggleMenu);


            // HIDE ON SCROLL DOWN
let prevScrollPos = window.pageYOffset;
    window.addEventListener("scroll", ()=>{
        let currentScrollPos = window.pageYOffset;
        document.getElementById("navbar").style.top = prevScrollPos>currentScrollPos ? "0" : "-60px";
        prevScrollPos= currentScrollPos;
    })


