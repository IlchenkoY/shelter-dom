const menuBtn = document.querySelector(".nav-btn");
const menu = document.querySelector(".menu");
const menuNavList = document.querySelector(".menu-navigation__list");
const ourPetsLogoText = document.querySelector(".our-pets-header__logo-text");
const ourPetsLogoTextSubtitle = document.querySelector(
  ".our-pets-header__logo-text--subtitle"
);

menuBtn.addEventListener("click", toggleMenuHandler);
menuNavList.addEventListener("click", toggleMenuHandler);

function toggleMenuHandler() {
  window.addEventListener("resize", () => location.reload());
  menuBtn.classList.toggle("nav-btn--rotate");
  menu.classList.toggle("is-hidden");
  document.querySelector("body").style.overflow =
    document.querySelector("body").style.overflow === "hidden"
      ? "auto"
      : "hidden";
  if (window.location.pathname.endsWith("/our-pets.html")) {
    OurPetsMenuHandler();
  }
}

function OurPetsMenuHandler() {
  menuBtn.classList.toggle("nav-btn__img--primary");
  ourPetsLogoText.classList.toggle("our-pets-header__logo-text");
  ourPetsLogoTextSubtitle.classList.toggle(
    "our-pets-header__logo-text--subtitle"
  );
}
