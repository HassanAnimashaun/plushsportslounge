function openNav() {
    document.getElementById(" ").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
//Slide show functionality 
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs(slideIndex += n);
}

function showDivs(n){
    var i;
    var x = document.getElementsByClassName("slideshow-pictures");
    if(n > x.length){slideIndex = 1}
    if(n < 1){slideIndex = x.length}
    for(i=0; i < x.length; i++){
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display="block";
}

//