const openButton = document.getElementById("open-btn")
const closeButton = document.getElementById("close-btn")
const sidebar = document.getElementById("sidebar-cta")
nav = document.querySelector('nav')



openButton.addEventListener('click', () =>{
  nav.classList.add('menu-btn');
});

closeButton.addEventListener('click', () =>{
  nav.classList.remove('menu-btn');
});

