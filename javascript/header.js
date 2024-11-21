// Select DOM elements
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const navbar = document.getElementById('navbar');
navbar.classList.add('open'); // Slide in the navbar.navbar.open 

// Show Navbar
menuIcon.addEventListener('click', () => {

  navbar.classList.add('open1'); // Slide in the navbar.navbar.open 

});

// Hide Navbar
closeIcon.addEventListener('click', () => {
  navbar.classList.remove('open1'); // Slide out the navbar
});




