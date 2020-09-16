import cards from "../data/cards";
import { elements } from "../utils/base";

const renderCard = (card) => {
  card.setAttributes();
  const markup = `
    <button type="button" id="${card.id}" class="group text-left focus:outline-none">
      <figure class="h-64 overflow-hidden rounded-lg shadow-md">
        <img class="w-full h-full object-cover"
          src="${card.img}"
          alt="${card.name}">
      </figure>
      <div class="-mt-8 mx-4 relative bg-white p-4 z-20 rounded-lg shadow-md group-hover:bg-${card.srcColor} transition-colors duration-200">
        <h3 class="font-semibold group-hover:text-white">${card.name}</h3>
        <div class="mt-2 flex items-center text-sm text-gray-500 group-hover:text-white group-hover:opacity-75">
          <figure>
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              ${card.srcIcon}
            </svg>
          </figure>
          <span class="ml-1 leading-none">Inspired by ${card.designer} on ${card.src}</span>
        </div>
      </div>
    </button>
  `;
  elements.cardsContainer.insertAdjacentHTML("beforeend", markup);
};

export const renderCards = () => {
  cards.forEach((card) => {
    renderCard(card);
  });
};
