import { animals } from "./pets";

export default function createPetsInfoMarkup(id) {
  const {
    name,
    kind,
    breed,
    description,
    age,
    imgsrc,
    inoculation,
    diseases,
    parasites,
  } = animals.filter((el) => el.id.toString() === id)[0];

  return `
            <img class="modal__img" src="${imgsrc}" alt="${breed}"/>
            <div class="moda__info-card">
                <h2 class="modal__title">${name}</h2>
                <h3 class="modal__kind">${
                  kind.charAt(0).toUpperCase() + kind.slice(1)
                }-${breed}</h3>
                <p class="modal__description">${description}</p>
                <ul class="modal__list">
                    <li class="modal__list-item"><span class="modal__list-item-element">Age:</span>${age}</li>
                    <li class="modal__list-item"><span class="modal__list-item-element">Inoculation:</span>${inoculation}</li>
                    <li class="modal__list-item"><span class="modal__list-item-element">Diseases:</span>${diseases}</li>
                    <li class="modal__list-item"><span class="modal__list-item-element">Parasites:</span>${parasites}</li>
                </ul>
            </div>
      `;
}
