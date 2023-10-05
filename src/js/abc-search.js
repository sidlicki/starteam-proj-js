import { searchCocktailsByFirstLetter } from './cocktail-api';
import { emptySearch } from './search-by-name';

import Pagination from 'tui-pagination';
import { pagiation } from './pagination';
import 'tui-pagination/dist/tui-pagination.css';

const alphabetList = document.querySelector('.js-search-menu');
const cardList = document.querySelector('.cocktails-list');
const alphabetSerchList = document.querySelector('.js-search-mobile');
const wrapperLoader = document.querySelector('.wrapper-loader');

alphabetList.addEventListener('click', onSearchbyLetter);

function onSearchbyLetter(evt) {
  let firstLetter = evt.target.textContent;
  cardList.innerHTML = '';
  wrapperLoader.classList.remove('is-hidden');

  searchCocktailsByFirstLetter(firstLetter)
    .then(cocktails => {
      if (cocktails && cocktails.length > 0) {
        document
          .querySelector('.tui-pagination')
          .classList.remove('visually-hidden');
        try {
          pagiation(cocktails, 'byName', 'cocktails-list');
        } catch {
        } finally {
          wrapperLoader.classList.add('is-hidden');
        }
      } else {
        cardList.innerHTML = emptySearch;
        document
          .querySelector('.tui-pagination')
          .classList.add('visually-hidden');
        wrapperLoader.classList.add('is-hidden');
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

  cardList.innerHTML = '';
  wrapperLoader.classList.remove('is-hidden');

  searchCocktailsByFirstLetter(firstLetter)
    .then(cocktails => {
      if (cocktails && cocktails.length > 0) {
        document
          .querySelector('.tui-pagination')
          .classList.remove('visually-hidden');
        try {
          pagiation(cocktails, 'byName', 'cocktails-list');
        } catch {
        } finally {
          wrapperLoader.classList.add('is-hidden');
        }
      } else {
        cardList.innerHTML = emptySearch;
        document
          .querySelector('.tui-pagination')
          .classList.add('visually-hidden');
        wrapperLoader.classList.add('is-hidden');
      }
    })
    .catch(error => {
      console.error('Error fetching cocktails:', error);
    });
}
