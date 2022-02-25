'use strict';

const menu = document.getElementById('menu');
const menu_button = document.getElementById('menu_button');
let toggler = false;

function toggleMenu(){
    toggler = !toggler;
    toggler ? menu.style.display = 'flex' : menu.style.display = 'none'; 
    console.log(toggler)
}

menu_button.addEventListener("click", toggleMenu);