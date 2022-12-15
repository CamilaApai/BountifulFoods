//Slideshow| Main

//Set the slide index to 1.
let slideIndex = 1;

//Display the first image.
showImages(slideIndex);

// The function displays all elements that have the current slide index, and hides those with the class "slides".
function showImages(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let slides2 = document.getElementsByClassName("slides2");
  let dots = document.getElementsByClassName("dot");
  let dots2 = document.getElementsByClassName("dot2");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex > slides2.length) {
    slideIndex = 1;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  slides2[slideIndex - 1].style.display = "block";

  dots[slideIndex - 1].className += " active";
  dots2[slideIndex - 1].className += " active";
  //setTimeout(showImages, 2000);
}
