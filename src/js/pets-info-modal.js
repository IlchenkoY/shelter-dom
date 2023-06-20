import createPetsInfoMarkup from "./pets-info-card";
const modal = document.querySelector(".modal");
const petsList = document.querySelector(".our-friends__list");
const closeBtn = document.querySelector(".modal__btn--close");
const backdrop = document.querySelector(".backdrop");

petsList.addEventListener("click", openBtnClickHandler);
backdrop.addEventListener("click", closeModalHandler);

function toggleModal() {
  backdrop.classList.toggle("is-hidden");
  document.querySelector("body").style.overflow =
    document.querySelector("body").style.overflow === "hidden"
      ? "auto"
      : "hidden";
}

function escKeyHandler(e) {
  if (e.code === "Escape") {
    toggleModal();
    window.removeEventListener("keydown", escKeyHandler);
  }
}

function openBtnClickHandler(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  modal.innerHTML = createPetsInfoMarkup(e.target.dataset.id);
  window.addEventListener("keydown", escKeyHandler);
  toggleModal();
}

function closeModalHandler(e) {
  if (
    e.target === e.currentTarget ||
    e.target === closeBtn ||
    e.target.nodeName === "svg" ||
    e.target.nodeName === "use"
  ) {
    window.removeEventListener("keydown", escKeyHandler);
    toggleModal();
  }
}
