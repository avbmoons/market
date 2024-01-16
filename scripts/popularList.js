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
    return `<div data-id=${this.id} class="item-box">
      <img class="item-box__image"
        src="${this.image}"
        id="item-${this.id}"
        alt="photo" title="${this.name}/>
      <a class="item-box__heading" href="pages/product.html">${this.name}</a>
      <div class="item-box__bottom-box">
        <div class="stores">
            <p class="price">${this.priceActive}&nbsp;${this.currency}</p>
            <button class="to-cart" id="toCart-${this.id}">Add to cart</button>
        </div>
      </div>
    </div>`;
  }
}

class PopularList {
  constructor() {
    this.ccatalog = [];
  }
  fetchPopular() {
    this.ccatalog = catalog.filter((catalog) => catalog.isPopular == "true");
  }
  render() {
    let listHtml = "";
    this.ccatalog.forEach((ccatalog) => {
      const catalogItem = new CatalogItem(
        ccatalog.id,
        ccatalog.name,
        ccatalog.image.replace("../", ""),
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
    document.querySelector(".popular__block__items").innerHTML = listHtml;
  }
}

class ArrivalsList {
  constructor() {
    this.ccatalog = [];
  }
  fetchArrivals() {
    this.ccatalog = catalog.filter((catalog) => catalog.isNew == "true");
  }
  render() {
    let listHtml = "";
    this.ccatalog.forEach((ccatalog) => {
      const catalogItem = new CatalogItem(
        ccatalog.id,
        ccatalog.name,
        ccatalog.image.replace("../", ""),
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
    document.querySelector(".arrivals__block__items").innerHTML = listHtml;
  }
}

const list = new PopularList();
list.fetchPopular();
list.render();

const listNew = new ArrivalsList();
listNew.fetchArrivals();
listNew.render();
