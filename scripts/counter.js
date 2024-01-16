//  события по клику на кнопки плюс и минус
document.onclick = (event) => {
  let countId = event.target.getAttribute("data-id");
  let countEls = document.querySelectorAll("input[data-id]");
  let costEls = document.querySelectorAll("p[data-id]");
  let totalEls = document.querySelectorAll(".total-active");

  let totalAmount = document.querySelector("#cartCostTotal");

  needInput = inputFunction(countEls, countId);

  let priceOrigin = priceOriginFunction(costEls, countId);
  let priceOriginValue = priceOrigin.innerHTML;

  let priceActive = priceActiveFunction(costEls, countId);
  let priceActiveValue = priceActive.innerHTML;

  let totalOrigin = totalOriginFunction(costEls, countId);
  let totalOriginValue = totalOrigin.innerHTML;

  let totalActive = totalActiveFunction(costEls, countId);
  let totalActiveValue = totalActive.innerHTML;

  if (event.target.classList.contains("counter-plus")) {
    plusFunction(needInput);
  } else if (event.target.classList.contains("counter-minus")) {
    minusFunction(needInput);
  }
  let quantity = needInput.value;

  totalOriginValue = quantity * priceOriginValue;
  totalOrigin.innerHTML = toFixed(totalOriginValue, 2);

  totalActiveValue = quantity * priceActiveValue;
  totalActive.innerHTML = toFixed(totalActiveValue, 2);

  totalAmountValue = totalAmountFunction(totalEls);
  totalAmount.innerHTML = toFixed(totalAmountValue, 2);
};

function inputFunction(arr, needId) {
  for (i = 0; i < arr.length; i++) {
    let countId = arr[i].getAttribute("data-id");
    if (countId == needId) {
      return arr[i];
    }
  }
}

function priceOriginFunction(arr, needId) {
  for (i = 0; i < arr.length; i++) {
    let countId = arr[i].getAttribute("data-id");
    let attrClass = arr[i].className;
    if (countId == needId && attrClass == "price-origin") {
      return arr[i];
    }
  }
}

function priceActiveFunction(arr, needId) {
  for (i = 0; i < arr.length; i++) {
    let countId = arr[i].getAttribute("data-id");
    let attrClass = arr[i].className;
    if (countId == needId && attrClass == "price-active") {
      return arr[i];
    }
  }
}

function totalOriginFunction(arr, needId) {
  for (i = 0; i < arr.length; i++) {
    let countId = arr[i].getAttribute("data-id");
    let attrClass = arr[i].className;
    if (countId == needId && attrClass == "total-origin") {
      return arr[i];
    }
  }
}

function totalActiveFunction(arr, needId) {
  for (i = 0; i < arr.length; i++) {
    let countId = arr[i].getAttribute("data-id");
    let attrClass = arr[i].className;
    if (countId == needId && attrClass == "total-active") {
      return arr[i];
    }
  }
}

function totalAmountFunction(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + Number(arr[i].innerHTML);
  }
  return sum;
}

//  увеличение количества товара
function plusFunction(countInput) {
  let count = countInput.value;
  if (count >= 1) {
    count++;
    countInput.value = count;
    countInput.innerHTML;
  }
}

//  уменьшение количества товара
const minusFunction = (countInput) => {
  let count = countInput.value;
  if (count > 1) {
    count--;
    countInput.value = count;
    countInput.innerHTML;
  }
};

let cartBtnNum = document.querySelector("#cartBtnNum");
// let headingCounter = document.querySelector("#headingCounter");
// let headingNum = headingCounter.textContent;

// headingNum = cartBtnNum.textContent;

// headingCounter.textContent = headingNum;
// headingCounter.innerHTML;
