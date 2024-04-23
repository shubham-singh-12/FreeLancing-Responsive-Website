let navbar = document.querySelector('nav');
let menuLinks = document.querySelector('#menu-links')


// NAVBAR FUNCTION WHILE SCROLL ON Y
window.onscroll = function () {
  if (window.scrollY > 0) {
    navbar.style.background = '#eefff9';
  }
  else {
    navbar.style.background = 'transparent';
  }
}


// TOGGLE BAR
function toggleMenu() {
  menuLinks.classList.toggle('show-menu');
}