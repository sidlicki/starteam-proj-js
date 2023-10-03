// "axios"/ "modern-normalize" /"notiflix" /"tui-pagination" - вже встановлено

import { fetchIngredientDetailsTest } from './cocktail-api';
import { loadFavoriteIngredientsData } from './favorite-ingredients';
import {
  onAddFavIngredClick,
  onRemFavIngredClick,
} from './add-remove-favorite';

const cardIngredient = document.querySelector('.modal-ingredient-content');
const btnCloseModal = document.querySelector('.js-modal-close');

const modalCocktailCard = document.querySelector('.modal-cocktail-window');
const favIngredientsContainer = document.querySelector(
  '.fav-ingredients-container'
);

const overlay = document.querySelector('.overlay');
const modal1 = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2');

//const ingredientList =
//  document.querySelector('.ingredients-list') ??
//  document.querySelector('.fav-ingredient-list');

let favoriteIngredients =
  JSON.parse(localStorage.getItem('favoriteIngredients')) || [];

function createCardIngredient({
  _id,
  title,
  description,
  type,
  abv,
  flavour,
  country,
}) {
  const markup = `<div class="add-cont">

  <div class="add-content">
  <h1 class="modal-ingred-title">${title}</h1>

  <p class="modal-ingred-text add-one">${type}</p>
  <div class="modal-cocktail-ingred add-two"></div>
</div>
</div>
  <h2 class="modal-ingred-subtitle add-subtitle"></h2>
  <p class="modal-ingred-text add-one">${title}: ${description}</p>
  <ul class="ingredients-list">
  <li class="ingredients-element">Type: ${type}</li>
  <li class="ingredients-element">Country of origin: ${country}</li>
  <li class="ingredients-element">Alcohol by volume: ${abv}</li>
  <li class="ingredients-element">Flavour: ${flavour}</li>
</ul>
  <button type="button" class="modal-add-ingred-btn-fav">ADD TO FAVORITE</button>
  <button type="button" class="modal-remove-ingred-btn-fav is-hidden">REMOVE FROM FAVORITE</button>
  <button type="button" class="modal-ingred-btn-back" name="close-modal" >BACK</button>`;
  return markup;
}

/*---------------МОЙ КОД-------------------------*/

// Add listener to Main page "Cocktails"
if (modalCocktailCard) {
  modalCocktailCard.addEventListener('click', onRenderOpenModalIngred);
}

if (favIngredientsContainer) {
  favIngredientsContainer.addEventListener('click', onRenderOpenModalIngred);
}

//cocktailList.addEventListener('click', onRenderOpenModal);  ??
// Add listener to page "Favorite Cocktails"
//favoriteCocktailList.addEventListener('click', onRenderOpenModal);

// Async function render and open modal window cocktails
async function onRenderOpenModalIngred(event) {
  event.preventDefault();
  //if (event.target.nodeName == 'BUTTON' && event.target.dataset.action == 'learnmore')
  if (
    event.target.dataset.action === 'ingredient-learn-more' ||
    event.target.nodeName === 'A'
  )
    try {
      const ingredientId = modalCocktailCard
        ? event.target.id
        : event.target.closest('.fav-ingredients-list-item').dataset
            .ingredientId;
      const ingredientDetails = await fetchIngredientDetailsTest(ingredientId);
      //const ingredientDetails = await fetchCocktailDetails('639b6de9ff77d221f190c51e')

      if (ingredientDetails.length === 0) {
        console.log(`Error`);
        return;
      }
      cardIngredient.innerHTML = '';
      cardIngredient.innerHTML = createCardIngredient(ingredientDetails[0]);
      if (modal1) {
        modalCocktClose();
      }
      modalIngredOpen();

      //----------- Working with Local Storage ----------- //

      // Button "Add-to-Favorite" modal window ingredient
      const btnModalAddFav = document.querySelector(
        '.modal-add-ingred-btn-fav'
      );

      // Button "Remove-from-Favorite" modal window ingredient
      const btnModalRemoveFav = document.querySelector(
        '.modal-remove-ingred-btn-fav'
      );

      // Проверяем, есть ли карточка с определенным id в массиве, считанном из Local Storage
      const indexModalFav = favoriteIngredients.findIndex(
        item => item === ingredientDetails[0]._id
      );

      // Если карточки с таким id нет, то скрываем кнопку "Add to Fav"
      // и показываем кнопку "Remove from Fav"
      if (indexModalFav !== -1) {
        btnModalAddFav.classList.add('is-hidden');
        btnModalRemoveFav.classList.remove('is-hidden');
      }

      // Manage button "Add to Favorite"
      btnModalAddFav.addEventListener('click', () => {
        btnModalAddFav.classList.add('is-hidden');
        btnModalRemoveFav.classList.remove('is-hidden');
        onAddFavIngredClick(ingredientDetails[0]._id);
      });

      // Manage button "Remove from Favorite"
      btnModalRemoveFav.addEventListener('click', () => {
        btnModalAddFav.classList.remove('is-hidden');
        btnModalRemoveFav.classList.add('is-hidden');
        onRemFavIngredClick(ingredientDetails[0]._id);
      });

      // Listen static html-button close modal window
      btnCloseModal.addEventListener('click', modalIngredCloseBtn);
      // Listen dynamic js-button close modal window
      cardIngredient.addEventListener('click', event => {
        if (event.target.name == 'close-modal') modalIngredCloseBack();
      });
      //------------------END WORKING with LOCAL STORAGE -------------------//
    } catch (error) {
      console.log(error);
    }
}

//*--------------MANAGE of MODAL WINDOW----------------*/

// Listen overlay (space around modal window)
overlay.addEventListener('click', function () {
  modal2.classList.remove('active');
  document.body.classList.remove('overflow-hidden');
  this.classList.remove('active');
  if (favIngredientsContainer) {
    loadFavoriteIngredientsData();
  }
});

// Function open modal from button
function modalIngredOpen() {
  overlay.classList.add('active');
  modal2.classList.add('active');
  document.body.classList.add('overflow-hidden');
}

// Function close modal from button
function modalIngredCloseBack() {
  modal2.classList.remove('active');
  overlay.classList.remove('active');
  modalCocktOpen();
  if (favIngredientsContainer) {
    loadFavoriteIngredientsData();
  }
}

// Function close modal from button
function modalIngredCloseBtn() {
  modal2.classList.remove('active');
  overlay.classList.remove('active');
  document.body.classList.remove('overflow-hidden');
  if (favIngredientsContainer) {
    loadFavoriteIngredientsData();
  }
}

// Function open modal from button
function modalCocktOpen() {
  if (modal1) {
    overlay.classList.add('active');
    modal1.classList.add('active');
  }
}

// Function close modal from button
function modalCocktClose() {
  if (modal1) {
    modal1.classList.remove('active');
  }

  overlay.classList.remove('active');
}

export { favoriteIngredients, createCardIngredient, modalIngredOpen };
