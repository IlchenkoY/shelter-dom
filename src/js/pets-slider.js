import debounce from "lodash.debounce";
const petsList = document.querySelector(".our-friends__list");
const firstImg = petsList.querySelectorAll("img")[0];
const arrows = document.querySelectorAll(".pagination-list__item");

if (!window.location.pathname.endsWith("our-pets.html")) {
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
}

let isDragStart = false,
  prevPageX,
  isDragging = false,
  prevScrollLeft,
  positionDiff;

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

function autoSlide() {
  if (petsList.scrollLeft === petsList.scrollWidth - petsList.clientWidth)
    return;
  positionDiff = Math.abs(positionDiff);
  let firstImgWidth =
    window.getComputedStyle(petsList).gap === "normal"
      ? firstImg.clientWidth + 4
      : firstImg.clientWidth +
        Number(window.getComputedStyle(petsList).gap.slice(0, -2));
  let valDifference = firstImgWidth - positionDiff;

  if (petsList.scrollLeft > prevScrollLeft) {
    return (petsList.scrollLeft +=
      positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff);
  }

  petsList.scrollLeft -=
    positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

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
  if (!isDragging) return;
  isDragging = false;
  autoSlide();
}

function dragging(e) {
  if (!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  petsList.classList.add("our-friends__list--dragging");
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  petsList.scrollLeft = prevScrollLeft - positionDiff;
  showButton();
}
