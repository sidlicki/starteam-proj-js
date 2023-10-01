import { createMarkup } from './create-card';
import { searchCocktailsByName } from './cocktail-api';

import noCoctailMobWebp from '/img/mobile/coctail.webp';
import noCoctailMobWebp2x from '/img/mobile/coctail@2x.webp';
import noCoctailTabWebp from '/img/tablet/coctail.webp';
import noCoctailTabWebp2x from '/img/tablet/coctail@2x.webp';

const searchInput = document.querySelector('.search-input');
const cardList = document.querySelector('.cocktails-list');

export const emptySearch = `
          <div>
            <picture>
                <!-- TABLET -->
                <source srcset="${noCoctailTabWebp} 1x, ${noCoctailTabWebp2x} 2x" type="image/webp" media="(min-width: 768px)">
                <!-- MOBILE -->
                <source srcset="${noCoctailMobWebp} 1x, ${noCoctailMobWebp2x} 2x" type="image/webp" media="(min-width: 320px)">
                <img class="no-fav-cocktail-img" src="${noCoctailMobWebp}" alt="cocktail">
            </picture>
            <p class="no-fav-cocktail-text">
            Sorry, we <span class="no-fav-cocktail-color">didn’t find</span> any cocktail for you
                
            </p>
          </div>
        `;

searchInput.addEventListener('keyup', onChangeInput);

function onChangeInput(event) {
  event.preventDefault();

  if (event.key === 'Enter') {
    const inputValue = searchInput.value.trim();
    searchInput.value = '';

    if (inputValue) {
      searchCocktailsByName(inputValue)
        .then(cocktails => {
          if (cocktails && cocktails.length > 0) {
            cardList.innerHTML = createMarkup(cocktails);
          } else {
            cardList.innerHTML = emptySearch;
          }
        })
        .catch(error => {
          console.error('Error fetching cocktails:', error);
        });
    }
  }
}
