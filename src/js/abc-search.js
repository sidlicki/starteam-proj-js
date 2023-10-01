import { createMarkup } from './create-card';
import { searchCocktailsByFirstLetter } from './cocktail-api';
import { emptySearch } from './search-by-name';

const alphabetList = document.querySelector('.js-search-menu');
const cardList = document.querySelector('.cocktails-list');
const alphabetSerchList = document.querySelector('.js-search-mobile');

alphabetList.addEventListener('click', onSearchbyLetter);

function onSearchbyLetter(evt) {
    let firstLetter = evt.target.textContent;
  searchCocktailsByFirstLetter(firstLetter)
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

alphabetSerchList.addEventListener('change', onSearchByLetter);

function onSearchByLetter(evt) {
    let selectedOption = evt.target.options[evt.target.selectedIndex];
    let firstLetter = selectedOption.value;
    searchCocktailsByFirstLetter(firstLetter)
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





