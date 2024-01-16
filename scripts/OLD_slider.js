// class SlidesItem {
//   constructor(id, image) {
//     this.id = id;
//     this.image = image;
//   }
//   render() {
//     return `<img class="slide-img" src="${this.image}" alt="slide" /`;
//   }
// }

// class SlidesList {
//   constructor() {
//     this.sslides = [];
//   }
//   fetchSlides() {
//     this.sslides = slides;
//   }
//   render() {
//     let listHtml = "";
//     this.sslides.forEach((sslides) => {
//       const slidesItem = new SlidesItem(sslides.id, sslides.image);
//       listHtml += slidesItem.render();
//     });
//     document.querySelector(".hero__slide").innerHTML = listHtml;
//   }
// }

var slideIndex = 0;
// const slidesList = new SlidesList();
// slidesList.fetchSlides();
// slidesList.render();
// console.log(slidesList);
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
