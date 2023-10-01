import { fetchIngredientDetails } from '/js/cocktail-api';
import coctailWebp from '/img/mobile/coctail.webp';
import coctailWebp2x from '/img/mobile/coctail@2x.webp';

import spriteUrl from '/img/svg/sprite.svg';

// "64aebb7f82d96cc69e0eb4c1","64aebb7f82d96cc69e0eb4bc","64aebb7f82d96cc69e0eb4a6","64aebb7f82d96cc69e0eb4f7","64f1d5d069d8333cf130fc6c","64f1d5d169d8333cf130fc7c","64f1d5d369d8333cf130fc9d","64f1d5d969d8333cf130fd0a","64f1d5ed69d8333cf130fe0c","64f1d5fa69d8333cf130feb5"
let favoriteIngredients;

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

const favoriteIngredientsContainer = document.querySelector(
  '.fav-ingredients-container'
);

const emptyFavoriteIngredientsMarkup = `
  <div class="no-fav-ingredients-wrapper">
    <img
      class="cocktail-photo-placeholder"
      srcset="${coctailWebp} 1x, ${coctailWebp2x} 2x"
      src="${coctailWebp}"
      alt="Favorite Cocktail Image Placeholder"
      width="142"
      height="122"
    />
    <p class="no-fav-ingredients-text">
      You haven't added any
      <span class="no-fav-ingredients-text-accent"> favorite ingredients </span>yet
    </p>
  </div>
  `;

const createFavoriteIngredientItemMarkup = ({
  _id,
  title,
  alcohol,
  description,
}) => {
  return `
        <li class="fav-ingredients-list-item">
          <h2 class="fav-ingredient-title">${title || 'No title'}</h2>
          <p class="fav-ingredient-alcohol">${getAlcoholLabelText(alcohol)}</p>
          <p class="fav-ingredient-description">${
            description || 'No description'
          }</p>
          <div class="fav-ingredients-buttons-wrapper">
            <button type="button" class="fav-ingredients-learn-more-btn" data-ingredient-id="${_id}">Learn more</button>
            <button type="button" class="fav-ingredients-remove-from-fav-btn" data-ingredient-id="${_id}">
              <svg
                class="fav-ingredients-icon-trash"
                width="18px"
                height="18px"
                aria-label="Remove favorite ingredient"
                >
                  <use href="${spriteUrl}#icon-trash"></use>
              </svg>
            </button>
          </div>
        </li>`;
};

const getIngredientsData = async ids => {
  await fetchIngredientDetails(ids).then(
    ingredients => (favoriteIngredients = ingredients)
  );
};

// TODO: refactor to work with fetched data. Fix render after delete fav ing
const renderFavoriteIngredients = async ids => {
  if (ids.length) {
    await getIngredientsData(ids);
    console.log(favoriteIngredients);
    let ingredientItemsMarkup = favoriteIngredients
      .map(ingredient => createFavoriteIngredientItemMarkup(ingredient))
      .join('');
    let ingredientsListMarkup = `<ul class="fav-ingredients-list">${ingredientItemsMarkup}</ul>`;

    favoriteIngredientsContainer.innerHTML = ingredientsListMarkup;
  } else {
    favoriteIngredientsContainer.innerHTML = emptyFavoriteIngredientsMarkup;
  }
};

// renderFavoriteIngredients(favoriteIngredientIds);
