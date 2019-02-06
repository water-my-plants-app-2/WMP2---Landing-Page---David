
const toggleMenu = () => {
  menu[0].classList.toggle('menu--open'); 
}

const menu = document.getElementsByClassName('menu');
const menuButton = document.getElementsByClassName('menu-button');
menuButton[0].addEventListener('click', () => toggleMenu());
