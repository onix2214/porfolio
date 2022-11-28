const menu = document.querySelector(".menu__body")
const menuBtn = document.querySelector(".menu__icon")
const body = document.body;
if (menu && menuBtn){
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("active")
        menuBtn.classList.toggle("active")
        body.classList.toggle('lock')
    })

    menu.querySelectorAll('.menu__link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove("active")
            menuBtn.classList.remove("active")
            body.classList.remove('lock')
        })
    })
}

const anchors = document.querySelectorAll('a[href*="#"]');
anchors.forEach(anchors => {
    anchors.addEventListener('click',event =>{
        event.preventDefault();

        const blockID = anchors.getAttribute('href').substring(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})

function oneEntry(entry){
    entry.forEach(change =>{
        if (change.isIntersecting){
            change.target.classList.add('element-show');
        }
    })
}
let options = {
    threshold: [0.5]};
let observer = new IntersectionObserver(oneEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements){
    observer.observe(elm);
}