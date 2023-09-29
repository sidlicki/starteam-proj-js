console.log(`Hi, cards!`);

import {fetchRandomCocktails} from './cocktail-api';
import {createMarkup} from './create-cards';

const cardList = document.querySelector(`.cocktails-list`)

//console.log(cardList);

let quantity;

quantity = 9;

cardList.innerHTML = ``;

//console.log(fetchRandomCocktails(quantity));

let allCards = await fetchRandomCocktails(quantity);

console.log(allCards);

cardList.insertAdjacentHTML(`beforeend`, createMarkup(allCards));

// createMarkup(allCards);

