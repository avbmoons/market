class Cart {
  products;
  constructor() {
    this.products = [];
  }
  get count() {
    return this.products.length;
  }
  addProduct(product) {
    this.products.push(product);
  }
  removeProduct(index) {
    this.products.splice(index, 1);
    location.reload();
  }

  get cost() {
    const prices = this.products.map((product) => {
      return product.priceOrigin;
    });
    const sum = prices.reduce((acc, num) => {
      return acc + num;
    }, 0);
    return sum;
  }
  get costDiscount() {
    const prices = this.products.map((product) => {
      return product.priceOrigin - product.priceActive;
    });
    const sum = prices.reduce((acc, num) => {
      return acc + num;
    }, 0);
    return sum;
  }
  get costTotal() {
    return this.cost - this.costDiscount;
  }
}

class Product {
  id;
  name;
  image;
  weight;
  units;
  resume;
  description;
  priceOrigin;
  priceActive;
  currency;
  category;
  type;
  isPopular;
  isNew;
  constructor(cardId) {
    this.id = cardId;
    this.name = data[this.id - 1].name;
    this.image = data[this.id - 1].image;
    this.weight = data[this.id - 1].weight;
    this.units = data[this.id - 1].units;
    this.resume = data[this.id - 1].resume;
    this.description = data[this.id - 1].description;
    this.priceOrigin = data[this.id - 1].priceOrigin;
    this.priceActive = data[this.id - 1].priceActive;
    this.currency = data[this.id - 1].currency;
    this.category = data[this.id - 1].category;
    this.type = data[this.id - 1].type;
    this.isPopular = data[this.id - 1].isPopular;
    this.isNew = data[this.id - 1].isNew;
  }
  render() {
    return `<div class="cart-item">
      <div class="product-box">
        <div class="image-box"><img src="${this.image}" alt="photo" /></div>
        <div class="name-box">
          <p class="name-box__name">${this.name}</p>
          <p class="name-box__resume">${this.resume}</p>
        </div>
      </div>
      <div class="price-box">
        <div class="price-origin-box">
          <p class="price-origin">${this.priceOrigin}</p>
          <p class="currency">${this.currency}</p>
        </div>
        <div class="price-active-box">
          <p class="price-active">${this.priceActive}</p>
          <p class="currency">${this.currency}</p>
        </div>
      </div>
      <div class="counter-box">
        <div class="counter">
          <button class="counter-minus" data-id="${this.id}">-</button>
          <input data-id="${this.id}"
            class="counter-value"
            id="counter-${this.id}"
            type="text"
            value="1"
            readonly
          />
          <button class="counter-plus" data-id="${this.id}">+</button>
        </div>
      </div>
      <div class="total-box">
        <div class="total-origin-box">
          <p class="total-origin" data-id="${this.id}></p>
          <p class="currency">${this.currency}</p>
        </div>
        <div class="total-active-box">
          <p class="total-active" data-id="${this.id}></p>
          <p class="currency">${this.currency}</p>
        </div>
      </div>
      <div class="button-box">
        <button class="button-show">
          <img src="../assets/icons/see.png" alt="see" title="See product"/>
        </button>
        <button class="button-delete">
          <img src="../assets/icons/delete.png" alt="delete" title="Delete"/>
        </button>
      </div>
    </div>`;
  }
}

const cardAddArr = Array.from(document.querySelectorAll(".to-cart"));
const cartNum = document.querySelector("#cartBtnNum"); //счетчик товаров в корзине
const cartBtn = document.querySelector("#cartBtn"); //кнопка открытия корзины

const myCart = new Cart();
if (localStorage.getItem("marketCart") == null) {
  localStorage.setItem("marketCart", JSON.stringify(myCart));
}

const savedCart = JSON.parse(localStorage.getItem("marketCart"));

myCart.products = savedCart.products;
cartNum.textContent = myCart.count;

// добавление товара в корзину
myCart.products = cardAddArr.forEach((cardAdd) => {
  cardAdd.addEventListener("click", (e) => {
    e.preventDefault();
    const card = e.target.closest(".item-box");
    const cardId = card.getAttribute("data-id");

    console.log(cardId);

    const product = new Product(cardId);
    const savedCart = JSON.parse(localStorage.getItem("marketCart"));
    myCart.products = savedCart.products;
    myCart.addProduct(product);
    localStorage.setItem("marketCart", JSON.stringify(myCart));
    cartNum.textContent = myCart.count;
  });
});

////функция перехода на страницу корзины
const cartPage = function () {
  window.location.href = "../pages/cart.html";
  cartContainerFill();
};

////    открытие страницы корзины
cartBtn.addEventListener("click", (e) => {
  e.preventDefault();
  cartPage();
});
