const body = document.body;
const modal = document.querySelector("#modal");
const modalOpen = document.querySelector("#modalOpen");
const modalClose = document.querySelector("#modalClose");

modalOpen.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("modal--open");
  body.classList.add("lock");

  //    здесь функция для формирования содержимого модала
});

modalClose.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("modal--open");
  body.classList.remove("lock");
  //  здесь функция при закрытии модала (если надо)
});
