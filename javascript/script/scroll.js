const bg = document.querySelectorAll('.bg')
const nav_a = document.querySelectorAll('nav a')
console.log(bg, nav_a) 
nav_a.forEach((target, index)=>{
console.log(target, index)
    target.addEventListener('click',(e)=>{
        e.preventDefault();
        window.scrollTo(0, bg[index].offsetTop)
    })
})