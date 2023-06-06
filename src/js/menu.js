const menuBtn = document.querySelector(".nav-btn");
const menu = document.querySelector(".menu");
const menuNavList = document.querySelector(".menu-navigation__list");

console.log(document.querySelectorAll(".menu-navigation__list-link")[1]);

menuBtn.addEventListener("click", btnClickHandler);
menuNavList.addEventListener("click", listItemClickHandler);

function menuHandler() {
  menuBtn.classList.toggle("nav-btn--rotate");
  menu.classList.toggle("is-hidden");
  document.body.classList.toggle("is-hidden");
}

function btnClickHandler() {
  menuHandler();
}

function listItemClickHandler() {
  menuHandler();
}
