const openButton = document.getElementById("open-btn");
const closeButton = document.getElementById("close-btn");
const sidebar = document.getElementById("sidebar-cta");
const pictures = document.querySelectorAll('.pictures');
const nextButton = document.querySelector('.next-btn');
const previousButton = document.querySelector('.prev-btn');

nav = document.querySelector('nav');


//Navigation Menu Functionality
openButton.addEventListener('click', () =>{
  nav.classList.add('menu-btn');
});

closeButton.addEventListener('click', () =>{
  nav.classList.remove('menu-btn');
});

//Slideshow Functionality
let slideIndex = 0;
showSlides(slideIndex);

function showSlides(i){
  if(i >= pictures.length){
    slideIndex = 0;
  }
  if(i < 0){
    slideIndex = pictures.length - 1;
  }

  pictures.forEach(pictures => pictures.style.display = 'none');
  pictures[slideIndex].style.display = 'block';

};
nextButton.addEventListener('click', () =>{
  showSlides(++slideIndex)
});
previousButton.addEventListener('click', () =>{
  showSlides(--slideIndex)
});
