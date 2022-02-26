let first_section = document.getElementById("section-1");
let first_section_btn = document.getElementById("section-1-btn");

console.log(first_section_btn)
console.log(first_section)

first_section_btn.addEventListener("click", ()=>scroll(first_section));

function scroll(element){
    element.scrollIntoView({behavior: 'smooth'});
}

