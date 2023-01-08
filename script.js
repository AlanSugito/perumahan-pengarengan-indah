AOS.init()

const navbar = document.querySelector('.navbar')
const links = navbar.querySelectorAll('.link')
window.addEventListener('scroll', () => {

    if(window.scrollY !== 0) {
        navbar.style.backgroundColor = 'white'
        links.forEach(link => link.style.color ='#454545')
    } else {
        navbar.style.backgroundColor = 'transparent'
        links.forEach(link => link.style.color = 'white')
    }
})