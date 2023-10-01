import { fetchIngredientDetails } from '/js/cocktail-api';

import spriteUrl from '/img/svg/sprite.svg';

const favoriteIngredientsContainer = document.querySelector(
  '.fav-ingredients-container'
);

const emptyFavoriteIngredientsMarkup = `<div class="no-fav-ingredients-wrapper">
        <img
          class="cocktail-photo-placeholder"
          srcset="/img/mobile/coctail.webp 1x, /img/mobile/coctail@2x.webp 2x"
          src="/img/mobile/coctail.webp"
          alt="Favorite Cocktail Image"
          width="142"
          height="122"
        />
        <p class="no-fav-ingredients-text">
          You haven't added any
          <span class="no-fav-ingredients-text-accent"> favorite ingredients </span>yet
        </p>
      </div>`;

let favoriteIngredientIds = JSON.parse(
  localStorage.getItem('favoriteIngredients') || '[]'
);

const getAlcoholLabelText = alcoholValue => {
  alcoholValue = alcoholValue.toLowerCase();

  return alcoholValue === 'yes'
    ? 'Alcoholic'
    : alcoholValue === 'no'
    ? 'Non-Alcoholic'
    : 'NA';
};

let favoriteIngredients;

const getIngredientsData = async ids => {
  await fetchIngredientDetails(ids).then(
    ingredients => (favoriteIngredients = ingredients)
  );
};

const renderFavoriteIngredients = async ids => {
  if (ids.length) {
    await getIngredientsData(ids);
    let ingredientItemsMarkup = favoriteIngredients
      .map(
        ({ _id, title, alcohol, description }) => `
        <li class="fav-ingredients-list-item">
          <h2 class="fav-ingredient-title">${title}</h2>
          <p class="fav-ingredient-alcohol">${getAlcoholLabelText(alcohol)}</p>
          <p class="fav-ingredient-description">${description}</p>
          <div class="fav-ingredients-buttons-wrapper">
            <button type="button" class="fav-ingredients-learn-more-btn" data-ingredient-id="${_id}">Learn more</button>
            <button type="button" class="fav-ingredients-remove-from-fav-btn" data-ingredient-id="${_id}">
              <svg
                class="fav-ingredients-icon-trash"
                width="18px"
                height="18px"
                aria-label="remove favorite ingredient icon"
                >
                  <use href="${spriteUrl}#icon-trash"></use>
              </svg>
            </button>
          </div>
        </li>`
      )
      .join('');
    let ingredientsListMarkup = `<ul class="fav-ingredients-list">${ingredientItemsMarkup}</ul>`;

    favoriteIngredientsContainer.innerHTML = ingredientsListMarkup;
  } else {
    favoriteIngredientsContainer.innerHTML = emptyFavoriteIngredientsMarkup;
  }
};

renderFavoriteIngredients(favoriteIngredientIds);
