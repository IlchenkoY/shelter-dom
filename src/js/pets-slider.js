import debounce from "lodash.debounce";
import { petsList } from "./pets-cards-list";
const firstImg = petsList.querySelectorAll("img")[0];
const arrows = document.querySelectorAll(".pagination-list__item");

petsList.addEventListener("mousedown", dragStart);
petsList.addEventListener("touchstart", dragStart);

petsList.addEventListener("mousemove", dragging);
petsList.addEventListener("touchmove", dragging);

petsList.addEventListener("mouseup", dragStop);
petsList.addEventListener("mouseleave", dragStop);
petsList.addEventListener("touchend", dragStop);
window.addEventListener(
  "resize",
  debounce(() => location.reload(), 100)
);

let isDragStart = false,
  prevPageX,
  prevScrollLeft;

arrows.forEach((icon) => {
  icon.addEventListener(
    "click",
    debounce(
      () => {
        let firstImgWidth =
          window.getComputedStyle(petsList).gap === "normal"
            ? firstImg.clientWidth + 4
            : firstImg.clientWidth +
              Number(window.getComputedStyle(petsList).gap.slice(0, -2));

        petsList.scrollLeft +=
          icon.id === "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showButton(), 60);
      },
      250,
      { trailing: false, leading: true }
    )
  );
});

function showButton() {
  let scrollWidth = petsList.scrollWidth - petsList.clientWidth;

  arrows[0].children[0].style.visibility =
    petsList.scrollLeft === 0 ? "hidden" : "visible";
  arrows[1].children[0].style.visibility =
    Math.ceil(petsList.scrollLeft) === scrollWidth ? "hidden" : "visible";
}

function dragStart(e) {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = petsList.scrollLeft;
}

function dragStop() {
  isDragStart = false;
  petsList.classList.remove("our-friends__list--dragging");
}

function dragging(e) {
  if (!isDragStart) return;
  e.preventDefault();
  petsList.classList.add("our-friends__list--dragging");
  let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  petsList.scrollLeft = prevScrollLeft - positionDiff;
  showButton();
}
