import cards from "./data/cards";
import * as cardView from "./components/card";
import * as budgetView from "./views/budget";
import * as photographerFolio from "./views/photographer-folio";
import * as trackerView from "./views/tracker";
import * as viewWrapperView from "./views/view-wrapper";

import "../css/tailwind.css";
import "../css/styles.scss";

/* ---- GLOBAL VARS ---- */
let state = {};
const views = [budgetView, photographerFolio, trackerView];

/* ---- CARDS CONTROLLER ---- */
cardView.renderCards();

state.isCardOpen = false;

document.querySelector("main").addEventListener("click", (e) => {
  if (state.isCardOpen) {
    if (e.target.closest(".__view-wrapper__clear")) {
      viewWrapperView.remove(document.querySelector(".__view-wrapper"));
      state.isCardOpen = false;
    }
  } else {
    cards.forEach((card) => {
      if (e.target.closest(`#${card.id}`)) {
        views.filter((v) => v.id === card.id)[0].render();
        state.isCardOpen = true;
      }
    });
  }
});

document.addEventListener("keydown", (e) => {
  if (state.isCardOpen) {
    if (e.keyCode === 27) {
      viewWrapperView.remove(document.querySelector(".__view-wrapper"));
      state.isCardOpen = false;
    }
  }
});
