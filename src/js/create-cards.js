console.log(`Hi, cards!`);
import './cocktail-api' ;

import {fetchRandomCocktails} from './cocktail-api';

const cardList = document.querySelector(`.cocktails-list`)

//console.log(cardList);

let quantity;

quantity = 9;

cardList.innerHTML = ``;

//console.log(fetchRandomCocktails(quantity));

let allCards = await fetchRandomCocktails(quantity);

//console.log(allCards);

cardList.insertAdjacentHTML(`beforeend`, createMarkup(allCards));

// createMarkup(allCards);

function createMarkup(arr) {
    return arr.map(({description, drink, drinkThumb, _id})=>
    `
    <div class="cocktail-card" id="${_id}">
            <img class="cocktail-image" src="${drinkThumb}" alt="${drink}" loading="lazy" width="307" height="257"/>
            <h3 class="cocktail-name">${drink}</h3>
            <p class="cocktail-info">${description}</p>
            <div class="btns-info">
                <button type="button" class="js-learn-more learn-more-button">Learn more</button>
                <button type="button" class="js-add-to add-to-button">
                    <svg class="icon" width="20px" height="16px">
                        <use href="/img/svg/sprite.svg#icon-heart"></use>
                    </svg>
                </button>
            </div>
        </div>
    `
    ).join(``);
};

//export {createMarkup};

