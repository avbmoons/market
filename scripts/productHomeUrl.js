let arrProducts = document.querySelectorAll('.item-box__heading');

//console.log(arrProducts);

arrProducts.forEach((arrProducts) => {
  //console.log(arrProducts.id);

  let el = arrProducts.id;
  let numEl = parseInt(el.match(/\d+/));
  //console.log(numEl);

  arrProducts.href = 'pages/product.html?id=' + numEl;

  //console.log(arrProducts.href);
});
