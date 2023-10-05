import { fetchCocktailDetails } from './cocktail-api';
import { onRemFavCocktClick } from './add-remove-favorite';
import { onRenderOpenModal } from './modal-coctail';

import defaultImg from '/img/mobile/coctail@2x.webp';
import noCoctailMobWebp from '/img/mobile/coctail.webp';
import noCoctailMobWebp2x from '/img/mobile/coctail@2x.webp';
import noCoctailTabWebp from '/img/tablet/coctail.webp';
import noCoctailTabWebp2x from '/img/tablet/coctail@2x.webp';

import Pagination from 'tui-pagination';
import { pagiation } from './pagination';
import 'tui-pagination/dist/tui-pagination.css';

const favCocktailList = document.querySelector('.fav-cocktail-list');
const notFoundBlock = document.querySelector('.not-found');
const wrapperLoader = document.querySelector('.wrapper-loader-fav-cocktails');

document.addEventListener('DOMContentLoaded', () => {
  wrapperLoader.classList.remove('is-hidden');
  try {
    generateCocktails();
  } catch {
  } finally {
    wrapperLoader.classList.add('is-hidden');
  }
});

// Оновлено: додавання обробників подій для кнопок видалення
function addRemoveFavoriteButtonClickHandlers() {
  const removeFavoriteButtons = document.querySelectorAll('.remove-favorite');

  removeFavoriteButtons.forEach(button => {
    button.addEventListener('click', () => {
      let currentPage;

      const cocktailId = button.id;
      onRemFavCocktClick(cocktailId);

      if (
        document
          .querySelector('.tui-pagination')
          .classList.contains('visually-hidden') === false
      ) {
        if (removeFavoriteButtons.length !== 0) {
          currentPage = Number(
            document.querySelector('.tui-is-selected').textContent
          );

          if (removeFavoriteButtons.length === 1) {
            currentPage = Number(
              document.querySelector('.tui-is-selected').textContent
            );
            currentPage = currentPage - 1;
          }
        }
      }

      generateCocktails(currentPage); // Оновлено: оновіть дані після видалення коктейлю
    });
  });
}

function clicPaginator(e) {
  if (e.target === e.currentTarget) {
    return;
  }
  addRemoveFavoriteButtonClickHandlers();
}

// функція для генерації списку коктейлів
export async function generateCocktails(currentPage) {
  const localFavorite =
    JSON.parse(localStorage.getItem('favoriteCocktails')) || [];

  if (localFavorite.length > 0) {
    notFoundBlock.classList.add('is-hidden');
    const data = await fetchCocktailDetails(
      localFavorite.map(cocktail => cocktail)
    );

    pagiation(data, 'byfavoriteCoctails', 'fav-cocktail-list', 6, currentPage);
    addRemoveFavoriteButtonClickHandlers();
    document
      .querySelector('.tui-pagination')
      .addEventListener('click', clicPaginator);

    notFoundBlock.innerHTML = '';
  } else {
    document.querySelector('.tui-pagination').classList.add('visually-hidden');
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
    // notFoundBlock.style.display = 'block';
    favCocktailList.innerHTML = '';
  }

  addRemoveFavoriteButtonClickHandlers(); // Оновлено: додали обробники подій для кнопок видалення
}

favCocktailList.addEventListener('click', function (event) {
  const currentIdCard = event.target.id;
  switch (event.target.dataset.action) {
    case 'learnmore':
      onRenderOpenModal(currentIdCard);

      break;
  }
});

document.body.addEventListener('click', event => {
  if (
    event.target.name === 'remove-cocktail' ||
    event.target.name === 'add-cocktail'
  ) {
    generateCocktails();
  }
});
