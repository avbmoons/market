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
        id="item-${this.id}"
        alt="photo" title="${this.name}"/>
      <a class="item-box__heading" href="product.html?id=" id="product${this.id}" target='_blank'>${this.name}</a>
      <div class="item-box__bottom-box">
        <div class="stores">
            <p class="price">${this.priceActive}&nbsp;${this.currency}</p>
            <button class="to-cart">Add to cart</button>
        </div>
      </div>
    </div>`;
  }
}

class SuggestList {
  constructor() {
    this.ccatalog = [];
  }
  fetchSuggest() {
    this.ccatalog = catalog.filter((catalog) => catalog.isPopular == 'true');
  }
  render() {
    let listHtml = '';
    this.ccatalog.forEach((ccatalog) => {
      const catalogItem = new CatalogItem(
        ccatalog.id,
        ccatalog.name,
        ccatalog.image, //.replace("../", ""),
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
    document.querySelector('.suggest__block__items').innerHTML = listHtml;
  }
}

const listSugg = new SuggestList();
listSugg.fetchSuggest();
listSugg.render();
