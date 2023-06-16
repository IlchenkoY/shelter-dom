const menuBtn = document.querySelector(".nav-btn");
const menu = document.querySelector(".menu");
const menuNavList = document.querySelector(".menu-navigation__list");
const ourPetsLogoText = document.querySelector(".our-pets-header__logo-text");
const ourPetsLogoTextSubtitle = document.querySelector(
  ".our-pets-header__logo-text--subtitle"
);

menuBtn.addEventListener("click", btnClickHandler);
menuNavList.addEventListener("click", listItemClickHandler);

function menuHandler() {
  menuBtn.classList.toggle("nav-btn--rotate");
  menu.classList.toggle("is-hidden");
  document.body.classList.toggle("is-hidden");
}

function btnClickHandler() {
  menuHandler();
  if (window.location.pathname.endsWith("/our-pets.html")) {
    menuBtn.classList.toggle("nav-btn__img--primary");
    ourPetsLogoText.classList.toggle("our-pets-header__logo-text");
    ourPetsLogoTextSubtitle.classList.toggle(
      "our-pets-header__logo-text--subtitle"
    );
  }
}

function listItemClickHandler() {
  menuHandler();
}
