// "axios"/ "modern-normalize" /"notiflix" /"tui-pagination" - вже встановлено

import { fetchCocktailDetails } from './cocktail-api';
import { onAddFavCocktClick, onRemFavCocktClick } from './add-remove-favorite';

const cardCocktail = document.querySelector('.modal-cocktail-content');
const btnCloseModal = document.querySelector('.modal-btn-close');

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const cocktailList = document.querySelector('.cocktails-list')

let favoriteCocktails = JSON.parse(localStorage.getItem('favoriteCocktails')) || [];

// Function Render ingredients in modal cocktails
function renderIngredients(ingredients) {
  return ingredients
    .map(
      item => `<li data-id="${item.ingredientId}" class="add-li"><a href="" class="add-two">${item.title}</a>
  </li>`
    )
    .join('');
}

// Function Render content modal window cocktails
function createCardCocktail({ drink, drinkThumb, instructions, ingredients }) {
  const markup = `<div class="add-cont">
  <img class="modal-cocktail-img" src="${drinkThumb}" alt="" />
  <div class="add-content">
  <h1 class="modal-cocktail-title">${drink}</h1>
  <h2 class="modal-cocktail-subtitle">INGREDIENTS:</h2>
  <p class="modal-cocktail-text add-one">Per cocktail</p>
  <ul class="modal-cocktail-ingred">${renderIngredients(ingredients)}</ul>
</div>
</div>
  <h2 class="modal-cocktail-subtitle add-subtitle">INSTRUCTIONS:</h2>
  <p class="modal-cocktail-text add-one">${instructions}</p>
  <button type="button" class="modal-add-cocktail-btn-fav">ADD TO FAVORITE</button>
  <button type="button" class="modal-remove-cocktail-btn-fav is-hidden">REMOVE FROM FAVORITE</button>
  <button type="button" class="modal-cocktail-btn-back" name="close-modal">BACK</button>`;
  return markup;
}

// Add listener to Main page "Cocktails"
  cocktailList.addEventListener('click', onRenderOpenModal);
// Add listener to page "Favorite Cocktails"
// ------ AWAITING-DATA-from-ANDRII-SIRYI------- // 


// Async function render and open modal window cocktails
 async function onRenderOpenModal (event) {
     if (event.target.nodeName == 'BUTTON')
 try {
  const cocktailDetails = await fetchCocktailDetails(event.target.id);

 if (cocktailDetails.length === 0) {
  console.log(`Error`);
  return;
 }
  cardCocktail.innerHTML = '';
  cardCocktail.innerHTML = createCardCocktail(cocktailDetails[0]);
  modalOpen();


  //----------- Working with Local Storage ----------- //

  // Button "Add-to-Favorite" modal window cocktail
  const btnModalAddFav = document.querySelector('.modal-add-cocktail-btn-fav');

  // Button "Remove-from-Favorite" modal window cocktail
  const btnModalRemoveFav = document.querySelector(
    '.modal-remove-cocktail-btn-fav'
  );

  // Проверяем, есть ли карточка с определенным id в массиве, считанном из Local Storage
  const indexModalFav = favoriteCocktails.findIndex(
    item => item === cocktailDetails[0]._id
  );

  // Если карточки с таким id нет, то скрываем кнопку "Add to Fav" и показываем кнопку "Remove from Fav"
  if (indexModalFav !== -1) {
    btnModalAddFav.classList.add('is-hidden');
    btnModalRemoveFav.classList.remove('is-hidden');
  }

  // Manage button "Add to Favorite"
  btnModalAddFav.addEventListener('click', () => {
    btnModalAddFav.classList.add('is-hidden');
    btnModalRemoveFav.classList.remove('is-hidden');
    onAddFavCocktClick(cocktailDetails[0]._id);
  });

  // Manage button "Remove from Favorite"
  btnModalRemoveFav.addEventListener('click', () => {
    btnModalAddFav.classList.remove('is-hidden');
    btnModalRemoveFav.classList.add('is-hidden');
    onRemFavCocktClick(cocktailDetails[0]._id);
  });

  // Listen static html-button close modal window
  btnCloseModal.addEventListener('click', modalClose);
  // Listen dynamic js-button close modal window 
  cardCocktail.addEventListener('click', (event) => {
   if (event.target.name == 'close-modal')
   modalClose(); 
  });
  //------------------END WORKING with LOCAL STORAGE -------------------//
  }
catch (error) { (console.log(error)) }
  }

//*--------------MANAGE of MODAL WINDOW----------------*/

// Listen overlay (space around modal window) 
  overlay.addEventListener('click', function() {
  modal.classList.remove('active');
  this.classList.remove('active');
});

// Function open modal from button
function modalOpen() {
  overlay.classList.add('active');
  modal.classList.add('active');
}

// Function close modal from button
function modalClose() {
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

/*-----------------END CODE MANAGE of MODAL WINDOW-------------------------------*/

export { favoriteCocktails }