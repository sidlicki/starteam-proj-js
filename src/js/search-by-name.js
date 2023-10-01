import { createMarkup } from './create-card';
import { searchCocktailsByName } from './cocktail-api';

const searchInput = document.querySelector('.search-input');
const cardList = document.querySelector('.cocktails-list');

export const emptySearch = `<p>Sorry, we didn’t find any cocktail for you</p>`;

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
