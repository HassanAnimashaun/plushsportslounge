const openButton = document.getElementById("open-btn");
const closeButton = document.getElementById("close-btn");
const sidebar = document.getElementById("sidebar-cta");
const pictures = document.querySelectorAll('.pictures');
const nextButton = document.querySelector('.next-btn');
const previousButton = document.querySelector('.prev-btn');
nav = document.querySelector('nav');
const video = document.querySelector("#video");


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


// When the video ends the first time auto next 
// after going through all pictures 
// coming back to the video we auto reload just
// the video to play automatically and continue

video.addEventListener("ended", () =>{
  showSlides(++slideIndex)
})
