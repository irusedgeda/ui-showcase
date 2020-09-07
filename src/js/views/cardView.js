import cards from "../data/cardsData";
import { elements } from "../config";

const renderCard = (card) => {
  card.setAttributes();
  const markup = `
    <div class="rounded-lg shadow-md group hover:shadow-xl">
      <header class="rounded-t-lg">
        <figure>
          <img class="w-full h-auto object-cover"
            src="${card.img}"
            alt="${card.name}">
        </figure>
      </header>
      <footer class="-mt-8 relative bg-white p-4 z-20 rounded-lg group-hover:bg-${card.srcColor}">
        <h3 class="font-semibold group-hover:text-white">${card.name}</h3>
        <div class="mt-2 flex items-center text-sm text-gray-500 group-hover:text-white group-hover:opacity-75">
          <figure>
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              ${card.srcIcon}
            </svg>
          </figure>
          <span class="ml-1 leading-none">Inspired by ${card.designer} on ${card.src}</span>
        </div>
      </footer>
    </div>
  `;
  elements.cardsContainer.insertAdjacentHTML("beforeend", markup);
};

export const renderCards = () => {
  cards.forEach((card) => {
    renderCard(card);
  });
};
