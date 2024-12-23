let data = catalog;
let dataLength = data.length;

console.log(dataLength);

let productId = new URLSearchParams(window.location.search).get('id');

console.log(productId);

let productImageLink; // .slide-img
let productNameText; // .product__block__heading__content
let productPriceText; // .product__block__heading__content
let productCurrencyText; // .product__block__heading__content
let productDescriptionText; // .product__block__heading__content

for (let i = 0; i < dataLength; i++) {
  let productShow;
  if (data[i].id == productId) {
    productShow = data[i];

    productImageLink = data[i].image;
    productNameText = data[i].name;
    productPriceText = data[i].priceActive;
    productCurrencyText = data[i].currency;
    productDescriptionText = data[i].description;
  } else {
    console.log('No product');
  }
}

let productName = document.getElementById('productName');
productName.textContent = productNameText;

let productPrice = document.getElementById('productPrice');
productPrice.textContent = productPriceText;

let productCurrency = document.getElementById('productCurrency');
productCurrency.innerHTML = productCurrencyText;

let productDescription = document.getElementById('productDescription');
productDescription.textContent = productDescriptionText;

let productImage = document.getElementById('productImage');
productImage.src = productImageLink;
