class CatalogItem {
  constructor(
    id,
    name,
    image,
    weight,
    units,
    resume,
    description,
    priceOrigin,
    priceActive,
    currency,
    category,
    type,
    isPopular,
    isNew
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.weight = weight;
    this.units = units;
    this.resume = resume;
    this.description = description;
    this.priceOrigin = priceOrigin;
    this.priceActive = priceActive;
    this.currency = currency;
    this.category = category;
    this.type = type;
    this.isPopular = isPopular;
    this.isNew = isNew;
  }
  render() {
    return `<div class="item-box">
    <img class="item-box__image"
      src="${this.image}"
      alt="photo"/>
    <a class="item-box__heading" href="#">${this.name}</a>
    <p class="item-box__price">${this.priceActive}&nbsp;${this.currency}</p>
  </div>`;
    //   return `<div class="catalog__block__item">
    //   <div class="catalog__block__item__image">
    //     <img src="${this.image}" alt="item" />
    //   </div>
    //   <a class="catalog__block__item__heading" href="#"
    //     >${this.name}</a
    //   >
    //   <p class="catalog__block__item__weight">${this.weight}&nbsp;${this.units}</p>
    //   <p class="catalog__block__item__text">${this.resume}</p>
    //   <div class="catalog__block__item__shopping-box">
    //     <div class="catalog__block__item__shopping-box__price-box">
    //       <p class="catalog__block__item__shopping-box__price-box__origin"
    //       >${this.priceOrigin}&nbsp;${this.currency}</p>
    //       <p class="catalog__block__item__shopping-box__price-box__active"
    //       >${this.priceActive}&nbsp;${this.currency}</p>
    //     </div>
    //     <div class="catalog__block__item__shopping-box__button-box">
    //       <button class="to-cart">
    //         <img src="../assets/icons/cart.png" alt="to-cart" />
    //       </button>
    //     </div>
    //   </div>
    // </div>`;
  }
}

class CatalogList {
  constructor() {
    this.ccatalog = [];
  }
  fetchCatalog() {
    this.ccatalog = catalog;
  }
  render() {
    let listHtml = "";
    this.ccatalog.forEach((ccatalog) => {
      const catalogItem = new CatalogItem(
        ccatalog.id,
        ccatalog.name,
        ccatalog.image,
        ccatalog.weight,
        ccatalog.units,
        ccatalog.resume,
        ccatalog.description,
        ccatalog.priceOrigin,
        ccatalog.priceActive,
        ccatalog.currency,
        ccatalog.category,
        ccatalog.type,
        ccatalog.isPopular,
        ccatalog.isNew
      );
      listHtml += catalogItem.render();
    });
    document.querySelector(".catalog__block__items").innerHTML = listHtml;
  }
}

const list = new CatalogList();
list.fetchCatalog();
list.render();
