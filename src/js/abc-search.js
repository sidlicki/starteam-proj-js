// "axios"/ "modern-normalize" /"notiflix" /"tui-pagination" - вже встановлено
import { createMarkup } from './create-card';
import { searchCocktailsByFirstLetter } from './cocktail-api';


document.addEventListener('DOMContentLoaded', function () {
  const searchMenuItems = document.querySelectorAll('.search-menu-item');
  const cardList = document.querySelector('.cocktails-list');
  const emptySearch = `<p>Sorry, we didn’t find any cocktail for you</p>`;

  searchMenuItems.forEach(item => {
    item.addEventListener('click', onClickMenuItem);
  });

  function onClickMenuItem(event) {
    event.preventDefault();

    const clickedLetter = event.target.textContent.toLowerCase();

    const matchingCocktails = Array.from(document.querySelectorAll('.cocktail-name'))
      .filter(card => card.textContent.toLowerCase().startsWith(clickedLetter))
      .map(card => card.closest('.cocktail-card'));

    if (matchingCocktails.length > 0) {
      const markup = createMarkup(matchingCocktails);
      cardList.innerHTML = markup;
    } else {
      cardList.innerHTML = emptySearch;
    }
  }
});

// function createMarkup(cocktails) {
 
//   return cocktails.map(cocktailData => {
    
//   }).join('');
// }
