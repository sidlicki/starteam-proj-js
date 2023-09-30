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

const renderFavoriteIngredients = ingredientIds => {
  if (ingredientIds.length) {
    fetchIngredientDetails(ingredientIds).then(ingredients => {
      let ingredientItemsMarkup = ingredients
        .map(
          ({ _id, title, description }) => `
        <li class="fav-ingredients-list-item">
          <h2 class="fav-ingredient-title">${title}</h2>
          <p class="fav-ingredient-alcohol">Non-Alcoholic</p>
          <p class="fav-ingredient-description">${description}</p>
          <div class="fav-ingredients-buttons-wrapper">
            <button type="button" class="fav-ingredients-learn-more-btn" data-ingredient-id="${_id}">Learn more</button>
            <button type="button" class="fav-ingredients-remove-from-fav-btn" id="${_id}">
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
    });
  } else {
    favoriteIngredientsContainer.innerHTML = emptyFavoriteIngredientsMarkup;
  }
};

renderFavoriteIngredients(favoriteIngredientIds);

// let favoriteIngredientsDetails;

// if (favoriteIngredientIds.length) {
//   getFavoriteIngredientsDetails(favoriteIngredientIds).then(
//     ingredientsDetails => (favoriteIngredientsDetails = ingredientsDetails)
//   );
//   console.log(favoriteIngredientsDetails);
// }

// async function getFavoriteIngredientsDetails(ids) {
//   return await fetchIngredientDetails(ids);
// }

// async function getFavoriteIngredientsMarkup() {}

// console.log('favoriteIngredientsDetails', favoriteIngredientsDetails);

// // const getFavoriteIngredientsMarkup = (ingredients) => {

// // }

// const getFavoriteIngredientsMarkup = async ingredientIds => {
//   if (ingredientIds.length) {
//     console.log('favoriteIngredients contains values:', ingredientIds);
//     await fetchIngredientDetails(ingredientIds).then(ingredients => {
//       console.log(ingredients);
//       const markup = ingredients
//         .map(
//           ({ title, description }) => `<ul class="fav-ingredients-list">
//         <li class="fav-ingredients-list-item">
//           <h2 class="fav-ingredient-title">${title}</h2>
//           <p class="fav-ingredient-alcohol">Non-Alcoholic</p>
//           <p class="fav-ingredient-description">${description}</p>
//         </li>
//       </ul>`
//         )
//         .join('');
//       console.log('markup', markup);

//       return markup;
//     });
//   } else {
//     return emptyFavoriteIngredientsMarkup;
//   }
// };

// getFavoriteIngredientsMarkup(favoriteIngredientIds).then(markup => {
//   console.log('Markup2', markup);
//   favoriteIngredientsContainer.innerHTML = markup;
// });
