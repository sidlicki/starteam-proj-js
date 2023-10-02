import { fetchCocktailDetails } from './cocktail-api';
import spriteUrl from '../img/svg/sprite.svg';
import { onRemFavCocktClick } from './add-remove-favorite';

import defaultImg from '/img/mobile/coctail@2x.webp';
import noCoctailMobWebp from '/img/mobile/coctail.webp';
import noCoctailMobWebp2x from '/img/mobile/coctail@2x.webp';
import noCoctailTabWebp from '/img/tablet/coctail.webp';
import noCoctailTabWebp2x from '/img/tablet/coctail@2x.webp';

document.addEventListener('DOMContentLoaded', generateCocktails);

// Оновлено: додавання обробників подій для кнопок видалення
function addRemoveFavoriteButtonClickHandlers() {
  const removeFavoriteButtons = document.querySelectorAll('.remove-favorite');

  removeFavoriteButtons.forEach(button => {
    button.addEventListener('click', () => {
      const cocktailId = button.id;
      onRemFavCocktClick(cocktailId);
      generateCocktails(); // Оновлено: оновіть дані після видалення коктейлю
    });
  });
}

// структура картки
const renderCocktail = (arr, container) => {
  const list = arr
    .map(
      item =>
        `<li class="cocktail-list-favorite">
            <img class="cocktail-item-img-favorite" src="${
              item.drinkThumb
            }" onerror="this.src='${defaultImg}'" alt="preview cocktail" width="307" height="auto">
            <div class="trk">
            <h2 class="cocktail-name-favorite">${item.drink.slice(0, 25)}</h2>
            <p class="description-container-favorite">${
              item.description.slice(0, 111) + ' . . .'
            }</p>
            <div class="button-wrap-favorite" >
                <button type="button" data-action="learnmore" class="learn-more-favorite" id="${
                  item._id
                }">LEARN MORE</button>
                <button type="button" class="remove-favorite" id="${item._id}">
                    <svg class="svg-icon-favorite-trash" width="18" height="18">
                        <use href="${spriteUrl}#icon-trash"></use>
                    </svg>
                </button>
            </div>
            </div>
        </li>`
    )
    .join('');
  
  container.innerHTML = list; // Оновлено: використовуємо innerHTML для заміни вмісту контейнера
  addRemoveFavoriteButtonClickHandlers(); // Оновлено: додали обробники подій для нових кнопок видалення
};

// функція для генерації списку коктейлів
async function generateCocktails() {
  const favCocktailList = document.querySelector('.fav-cocktail-list');
  const notFoundBlock = document.querySelector('.not-found');

  const localFavorite =
    JSON.parse(localStorage.getItem('favoriteCocktails')) || [];
  
  if (localFavorite.length > 0) {
    notFoundBlock.classList.add('is-hidden');
    const data = await fetchCocktailDetails(
      localFavorite.map(cocktail => cocktail)
    );
    renderCocktail(data, favCocktailList);
  } else {
    notFoundBlock.classList.remove('is-hidden');
    notFoundBlock.innerHTML = `
            <picture>
                <!-- TABLET -->
                <source srcset="${noCoctailTabWebp} 1x, ${noCoctailTabWebp2x} 2x" type="image/webp" media="(min-width: 768px)">
                <!-- MOBILE -->
                <source srcset="${noCoctailMobWebp} 1x, ${noCoctailMobWebp2x} 2x" type="image/webp" media="(min-width: 320px)">
                <img class="no-fav-cocktail-img" src="${noCoctailMobWebp}" alt="cocktail">
            </picture>
            <p class="no-fav-cocktail-text">
                You haven't added any
                <span class="no-fav-cocktail-color">favorite cocktails</span> yet
            </p>
        `;
    notFoundBlock.style.display = 'block';
    favCocktailList.innerHTML = '';
  }

  addRemoveFavoriteButtonClickHandlers(); // Оновлено: додали обробники подій для кнопок видалення
}
