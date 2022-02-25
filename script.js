const elements = document.querySelectorAll(".section");

const showImage = (entries, observer)=>{
    // console.log(entries);
    // console.log(observer);
    entries.forEach(entrie=>{
        if(entrie.isIntersecting){
            entrie.target.classList.add("isIntersected");
        }
    })
}

const observer = new IntersectionObserver(showImage, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.4,
});


elements.forEach(element=>{
    observer.observe(element);
})
// console.log(observer);
// console.log(elements)