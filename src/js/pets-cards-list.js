import { animals } from "./pets";

export const petsList = document.querySelector(".our-friends__list");

petsList.insertAdjacentHTML("afterbegin", createPetsListMarkup(animals));

function createPetsListMarkup(animals) {
  return animals
    .map(({ imgsrc, name }) => {
      return `
    <li class="our-friends__card">
        <img class="our-friends__img" src="${imgsrc}" loading="lazy" alt="pet" draggable="false"
            width="270" height="270" />
        <p class="our-friends__description">${name}</p>
        <button class="our-friends__btn" type="button">
            Learn more
        </button>
    </li>
    `;
    })
    .join("");
}
