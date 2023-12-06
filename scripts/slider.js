var slideIndex = 0;

showSlides();

function showSlides() {
  var i;
  var slider = document.getElementsByClassName("slide-img");

  for (i = 0; i < slider.length; i++) {
    slider[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slider.length) {
    slideIndex = 1;
  }
  slider[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}
