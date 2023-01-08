AOS.init()

const navbar = document.querySelector('.navbar')
const links = navbar.querySelectorAll('.link')
const form = document.querySelector('form')
const pesan = document.querySelector('textarea')

window.addEventListener('scroll', () => {

    if(window.scrollY !== 0) {
        navbar.style.backgroundColor = 'white'
        links.forEach(link => link.style.color ='#454545')
    } else {
        navbar.style.backgroundColor = 'transparent'
        links.forEach(link => link.style.color = 'white')
    }
})

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const {nama, email, telp} = form
    swal("Terima Kasih", "Data anda telah tersimpan", 'success')
})