const petsList = document.querySelector(".our-friends__list");
// const closeBtn = document.querySelector(".modal__btn--close");
const backdrop = document.querySelector(".backdrop");
// const modal = document.querySelector(".modal");

petsList.addEventListener("click", openBtnClickHandler);
backdrop.addEventListener("click", closeModalHandler);

function toggleModal() {
  backdrop.classList.toggle("is-hidden");
  document.body.classList.toggle("is-hidden");
}

function escKeyHandler(e) {
  if (e.code === "Escape") {
    backdrop.classList.add("is-hidden");
    document.body.classList.add("is-hidden");
    window.removeEventListener("keydown", escKeyHandler);
  }
}

function openBtnClickHandler(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  window.addEventListener("keydown", escKeyHandler);
  toggleModal();
}

function closeModalHandler(e) {
  if (e.target.className === "modal") {
    return;
  }
  window.removeEventListener("keydown", escKeyHandler);
  toggleModal();
}
