import './style.scss'

const navbarBurger = document.getElementById('navbar-burger')
const navbarBurgerTarget = document.getElementById(navbarBurger.dataset.target)

navbarBurger.addEventListener('click', () => {
	navbarBurger.classList.toggle('is-active')
	navbarBurgerTarget.classList.toggle('is-active')
})
