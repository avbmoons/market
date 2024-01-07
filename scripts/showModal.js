const data = catalog;

const body = document.body;
const modal = document.querySelector("#modal");
const modalClose = document.querySelector(".modal__block__close");

const modalBlock = document.querySelector(".modal__block");
const modalProduct = document.querySelector(".product");

const locpage = location.pathname.match(/[^/]*$/);
console.log(locpage[0]);

function init() {
  let images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    images[i].onclick = showModal;
  }
}

function showModal(eventObj) {
  let appDiv = document.getElementById("productImage");
  appDiv.innerHTML = "";
  let eventElement = eventObj.target;

  let imageNameParts = eventElement.id.split("-");

  let src = "../assets/catalog/" + "item" + "-" + imageNameParts[1] + ".png";

  if (!(locpage == "index.html")) {
    src = src;
  } else {
    src = src.replace("../", "");
  }

  let imageDomElement = document.createElement("img");
  imageDomElement.src = src;

  if (locpage === "index.html") {
    imageDomElement.src.replace("../", "");
  }

  console.log(imageDomElement.naturalWidth);

  appDiv.appendChild(imageDomElement);

  let headDiv = document.getElementById("productTitle");
  headDiv.innerHTML = "";
  let srcHead = data[imageNameParts[1] - 1].name;
  let headDomElement = document.createElement("p");
  headDomElement.classList.add("product-title");
  headDiv.appendChild(headDomElement);
  headDomElement.innerHTML = srcHead;

  let resumeDiv = document.getElementById("productResume");
  resumeDiv.innerHTML = "";
  let srcResume = data[imageNameParts[1] - 1].resume;
  let resumeDomElement = document.createElement("p");
  resumeDomElement.classList.add("product-resume");
  resumeDiv.appendChild(resumeDomElement);
  resumeDomElement.innerHTML = srcResume;

  let priceDiv = document.getElementById("productPrice");
  priceDiv.innerHTML = "";
  let srcCurrency = data[imageNameParts[1] - 1].currency;

  let srcPriceOrigin = data[imageNameParts[1] - 1].priceOrigin;
  let priceOriginDomElement = document.createElement("p");
  priceOriginDomElement.classList.add("product-price-origin");
  priceDiv.appendChild(priceOriginDomElement);
  priceOriginDomElement.innerHTML = srcPriceOrigin + " " + srcCurrency;

  //   let srcPriceDiscount = data[imageNameParts[1] - 1].priceDiscount;
  //   let priceDiscountDomElement = document.createElement("p");
  //   priceDiscountDomElement.classList.add("product-price-discount");
  //   priceDiv.appendChild(priceDiscountDomElement);
  //   priceDiscountDomElement.innerHTML =
  //     "Discount: " + srcPriceDiscount + " " + srcCurrency;

  let srcPriceActive = data[imageNameParts[1] - 1].priceActive;
  let priceActiveDomElement = document.createElement("p");
  priceActiveDomElement.classList.add("product-price-active");
  priceDiv.appendChild(priceActiveDomElement);
  priceActiveDomElement.innerHTML = srcPriceActive + " " + srcCurrency;

  //  check prices
  if (srcPriceActive == srcPriceOrigin) {
    priceOriginDomElement.style.display = "none";
  } else {
    priceOriginDomElement.style.textDecoration = "line-through";
  }

  //  chqck image width
  if (imageDomElement.naturalWidth > 310) {
    modalBlock.style.width = "50%";
    modalBlock.style.height = "auto"; // "80%";
    modalProduct.style.flexDirection = "column";
    appDiv.style.width = "100%";
    appDiv.style.height = "auto";
  } else {
    modalBlock.style.width = "50%";
    modalBlock.style.height = "60%";
    modalProduct.style.flexDirection = "row";
    appDiv.style.width = "auto";
    appDiv.style.height = "100%";
  }

  // open modal
  modal.classList.add("modal--open");
  body.classList.add("lock");

  modalClose.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("modal--open");
    body.classList.remove("lock");
    //  any function for modal closing, if needed
  });
}

window.onload = init;
