import { fetchIngredientDetails } from '/js/cocktail-api';
import { createCardIngredient, modalIngredOpen } from '/js/modal-ingredient';
import coctailWebp from '/img/mobile/coctail.webp';
import coctailWebp2x from '/img/mobile/coctail@2x.webp';
import spriteUrl from '/img/svg/sprite.svg';

const LOCAL_STORAGE_FAV_INGREDIENTS_KEY = 'favoriteIngredients';

let favoriteIngredientsDetails = [];
let favoriteIngredientIds = [];

const favIngredientsContainer = document.querySelector(
  '.fav-ingredients-container'
);

const getAlcoholLabelText = alcoholValue => {
  alcoholValue = alcoholValue.toLowerCase();
  return alcoholValue === 'yes'
    ? 'Alcoholic'
    : alcoholValue === 'no'
    ? 'Non-Alcoholic'
    : 'NA';
};

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
        <li class="fav-ingredients-list-item" data-ingredient-id="${_id}">
          <h2 class="fav-ingredient-title">${title || 'No title'}</h2>
          <p class="fav-ingredient-alcohol">${getAlcoholLabelText(alcohol)}</p>
          <p class="fav-ingredient-description">${
            description || 'No description'
          }</p>
          <div class="fav-ingredients-buttons-wrapper">
            <button
              type="button"
              class="fav-ingredients-learn-more-btn"
              data-action="ingredient-learn-more">Learn more</button>
            <button
              type="button"
              class="fav-ingredients-remove-from-fav-btn"
              data-action="igredient-remove-from-favorite">
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

favoriteIngredientIds = JSON.parse(
  localStorage.getItem(LOCAL_STORAGE_FAV_INGREDIENTS_KEY) || '[]'
);

const removeIngredientFromFavorites = event => {
  if (
    event.target.nodeName !== 'BUTTON' ||
    event.target.dataset.action !== 'igredient-remove-from-favorite'
  ) {
    return;
  }
  const ingredientId = event.target.closest('.fav-ingredients-list-item')
    .dataset.ingredientId;

  // Remove ingredient id from local storage
  favoriteIngredientIds = favoriteIngredientIds.filter(
    id => id !== ingredientId
  );
  localStorage.setItem(
    LOCAL_STORAGE_FAV_INGREDIENTS_KEY,
    JSON.stringify(favoriteIngredientIds)
  );

  // Remove an ingredient from the fetched data
  favoriteIngredientsDetails = favoriteIngredientsDetails.filter(
    item => item._id !== ingredientId
  );
  renderFavoriteIngredients();
};

if (favIngredientsContainer) {
  favIngredientsContainer.addEventListener(
    'click',
    removeIngredientFromFavorites
  );
}

const favoriteIngredientsContainer = document.querySelector(
  '.fav-ingredients-container'
);

const getIngredientsData = async ids => {
  favoriteIngredientsDetails = await fetchIngredientDetails(ids);
};

const renderFavoriteIngredients = () => {
  if (favoriteIngredientIds.length) {
    const ingredientItemsMarkup = favoriteIngredientsDetails
      .map(ingredient => createFavoriteIngredientItemMarkup(ingredient))
      .join('');
    const ingredientsListMarkup = `<ul class="fav-ingredients-list">${ingredientItemsMarkup}</ul>`;

    favoriteIngredientsContainer.innerHTML = ingredientsListMarkup;
  } else {
    favoriteIngredientsContainer.innerHTML = emptyFavoriteIngredientsMarkup;
  }
};

const loadFavoriteIngredientsData = async () => {
  favoriteIngredientIds =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_FAV_INGREDIENTS_KEY)) || [];
  await getIngredientsData(favoriteIngredientIds);
  renderFavoriteIngredients();
};

if (favIngredientsContainer) {
  loadFavoriteIngredientsData();
}

export { loadFavoriteIngredientsData };
