import Pagination from 'tui-pagination';
import { fetchIngredientDetails } from '/js/cocktail-api';
import coctailWebp from '/img/mobile/coctail.webp';
import coctailWebp2x from '/img/mobile/coctail@2x.webp';
import spriteUrl from '/img/svg/sprite.svg';

// ============ DELETE THE FOLLOWING CODE !!! ============
const addFavoriteIngredientsBtn = document.querySelector(
  '.temp-add-fav-ingredients'
);

if (addFavoriteIngredientsBtn) {
  addFavoriteIngredientsBtn.addEventListener('click', () => {
    localStorage.setItem(
      'favoriteIngredients',
      JSON.stringify([
        '64f1d5c969d8333cf130fbe8',
        '64f1d5d269d8333cf130fc90',
        '64aebb7f82d96cc69e0eb4b9',
        '64f1d5dc69d8333cf130fd32',
        '64f1d5d369d8333cf130fc9d',
        '64f1d60069d8333cf130ff09',
        '64aebb7f82d96cc69e0eb4ad',
        '64f1d5c069d8333cf130fb3d',
        '64f1d60169d8333cf130ff13',
      ])
    );
  });
}

// =======================================================

const LOCAL_STORAGE_FAV_INGREDIENTS_KEY = 'favoriteIngredients';

let favoriteIngredientsDetails = [];
let favoriteIngredientIds = [];
let currentPage = 1;
let itemsPerPage = 6;

const favIngredientsContainer = document.querySelector(
  '.fav-ingredients-container'
);
const paginationContainer = document.querySelector('.tui-pagination');

const getAlcoholLabelText = alcoholValue => {
  alcoholValue = alcoholValue.toLowerCase();
  return alcoholValue === 'yes'
    ? 'Alcoholic'
    : alcoholValue === 'no'
    ? 'Non-Alcoholic'
    : 'NA';
};

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

const renderIngredients = page => {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageIngredients = favoriteIngredientsDetails.slice(
    startIndex,
    endIndex
  );

  if (
    currentPageIngredients.length === 0 &&
    favoriteIngredientsDetails.length === 0
  ) {
    favIngredientsContainer.innerHTML = emptyFavoriteIngredientsMarkup;
    return;
  } else if (currentPageIngredients.length === 0) {
    currentPage = Math.max(currentPage - 1, 1);
    renderIngredients(currentPage);
    renderPagination();
    return;
  }

  const ingredientItemsMarkup = currentPageIngredients
    .map(ingredient => createFavoriteIngredientItemMarkup(ingredient))
    .join('');
  const ingredientsListMarkup = `<ul class="fav-ingredients-list">${ingredientItemsMarkup}</ul>`;
  favIngredientsContainer.innerHTML = ingredientsListMarkup;
};

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
  renderIngredients(currentPage);
  renderPagination();
};

if (favIngredientsContainer) {
  favIngredientsContainer.addEventListener(
    'click',
    removeIngredientFromFavorites
  );
}

const getIngredientsData = async ids => {
  if (ids.length) {
    favoriteIngredientsDetails = await fetchIngredientDetails(ids);
  }
};

const renderPagination = () => {
  paginationContainer.innerHTML = '';

  const totalItems = favoriteIngredientsDetails.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) {
    paginationContainer.style.display = 'none';
  } else {
    paginationContainer.style.display = 'block';

    const pagination = new Pagination(paginationContainer, {
      totalItems,
      itemsPerPage,
      page: currentPage,
    });

    pagination.on('afterMove', event => {
      currentPage = event.page;
      renderIngredients(currentPage);
    });
  }
};

const loadFavoriteIngredientsData = async () => {
  favoriteIngredientIds =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_FAV_INGREDIENTS_KEY)) || [];
  await getIngredientsData(favoriteIngredientIds).then(() => {
    renderIngredients(currentPage);
    renderPagination();
  });
};

if (favIngredientsContainer) {
  loadFavoriteIngredientsData();
}

export { loadFavoriteIngredientsData };
