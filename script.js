const hamburguer = document.querySelector('.menu-hamburguer')
const menu = document.querySelector('.social-links')

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('open')
    menu.classList.toggle('open')
})

// Scroll smooth(suave)
function scrollTo(element){
    document.querySelector(element).scrollIntoView({behavior:"smooth"})
}

document.querySelector('#clickAbout').addEventListener('click', function(event){
    event.preventDefault()
    scrollTo('#about')

    console.log('funcionou')
})
