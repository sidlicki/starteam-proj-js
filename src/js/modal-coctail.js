// "axios"/ "modern-normalize" /"notiflix" /"tui-pagination" - вже встановлено
// console.log('hello');

import { testArr } from './test/test-coctails' ;
import { fetchCocktailDetails } from './cocktail-api';

let arrFav;

const cardCocktail = document.querySelector('.modal-cocktail-content');
const btnOpenModal = document.querySelectorAll('.js-modal-open');
const btnCloseModal = document.querySelectorAll('.js-modal-close');

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

const { drink, drinkThumb, instructions, ingredients } = testArr[1];

const cocktailIds = "639b6de9ff77d221f190c518";
//const cocktailIds = "639b6de9ff77d221f190c521";
//const cocktailIds = "639b6de9ff77d221f190c51c";
//const cocktailIds = "639b6de9ff77d221f190c52a";
//const cocktailIds = "639b6de9ff77d221f190c527";
//const cocktailIds = "639b6de9ff77d221f190c517";
//const cocktailIds = "639b6de9ff77d221f190c524";


// Функция рендера ингредиентов (их несколько)
function renderIngredients (ingredients) {
  return ingredients
  .map((item) => `<li data-id="${item.ingredientId}" class=""><a href="" class="modal-coctail-ingred">${item.title}</a>
  </li>`)
  .join(''); 
}  

// Функция рендера содержимого модального окна
function createCardCocktail( {drink, drinkThumb, instructions, ingredients} ) {
   
  const markup = `<div class="add-cont">
  <img class="modal-cocktail-img" src="${drinkThumb}" alt="" />
  <div class="add-content">
  <h1 class="modal-cocktail-title">${drink}</h1>
  <h2 class="modal-cocktail-subtitle">INGREDIENTS:</h2>
  <p class="modal-cocktail-text add-one">Per cocktail</p>
  <div class="modal-cocktail-ingred add-two">${renderIngredients(ingredients)}</div>
</div>
</div>
  <h2 class="modal-cocktail-subtitle add-subtitle">INSTRUCTIONS:</h2>
  <p class="modal-cocktail-text add-one">${instructions}</p>
  <button type="button" class="modal-add-cocktail-btn-fav">ADD TO FAVORITE</button>
  <button type="button" class="modal-remove-cocktail-btn-fav is-hidden">REMOVE FROM FAVORITE</button>
  <button type="button" class="modal-cocktail-btn-back js-modal-close">BACK</button>`
  return markup;
}


// Функция полного рендера модального окна коктейля
async function createModalCard(event) {
   cardCocktail.innerHTML = '';
   try {
      const resp = await fetchCocktailDetails(cocktailIds)  // (event.target.id)
      const { drink, drinkThumb, instructions, ingredients } = resp[0];
      cardCocktail.innerHTML = createCardCocktail(resp[0]);
      
   
      //----------- КОД РАБОТЫ с LOCAL STORAGE ----------- //
            
      // Объявляем переменную для работы с Local Storage
      let arrFav = JSON.parse(localStorage.getItem("favoriteCocktails")) || [];
             
     // Кнопка "Add-to-Favorite" модального окна коктейля 
      const btnModalAddFav = document.querySelector('.modal-add-cocktail-btn-fav');

      // Кнопка "Remove-from-Favorite" модального окна коктейля 
      const btnModalRemoveFav = document.querySelector('.modal-remove-cocktail-btn-fav');
      
      // В случае, если кнопок Remove несколько
      //const btnModalRemoveFav = document.querySelectorAll('.modal-remove-cocktail-btn-fav');
     
      // Проверяем, есть ли карточка с определенным id в массиве, считанном из Local Storage
      const indexModalFav = arrFav.findIndex(item => item === resp[0]._id);
           
      // Если карточки с таким id нет, то скрываем кнопку "Add to Fav" и показываем кнопку "Remove from Fav" 
      if (indexModalFav !== -1) {
        btnModalAddFav.classList.add('is-hidden');
        btnModalRemoveFav.classList.remove('is-hidden');
      }
        
      // Устанавливаем прослушиватель кнопки "Add to Favorite"
      btnModalAddFav.addEventListener('click', onAddFavClick);

      // Функция обработки клика кнопки "Add to Favorite"
      function onAddFavClick() {
      const indexFavCockt = arrFav.findIndex(item => item === resp[0]._id);
 
      if (indexFavCockt === -1) {
      arrFav.push(resp[0]._id);
      btnModalAddFav.classList.add('is-hidden');
      btnModalRemoveFav.classList.remove('is-hidden');
      localStorage.setItem('favoriteCocktails', JSON.stringify(arrFav)); 
      return arrFav;
 }
}
     // Устанавливаем прослушиватель кнопки "Remove from Favorite"
      btnModalRemoveFav.addEventListener('click', onRemoveFavClick);
 
      // Функция обработки клика кнопки "Remove from Favorite"
      function onRemoveFavClick() {
      btnModalAddFav.classList.remove('is-hidden');
      btnModalRemoveFav.classList.add('is-hidden');
      const indFavRem = arrFav.findIndex(item => item === resp[0]._id);
      console.log(indFavRem);
      if (indFavRem !== -1) {
      arrFav.splice(indFavRem, 1)
      localStorage.setItem("favoriteCocktails", JSON.stringify(arrFav));
      return arrFav;
    } 
  }
  //------------------ОКОНЧАНИЕ КОДА РАБОТЫ с LOCAL STORAGE -------------------//
  }
      catch(error){console.log(error)}
}

//*--------------УПРАВЛЕНИЕ МОДАЛЬНЫМ ОКНОМ----------------*/

// Прослушивание кнопки открытия модального окна (если оно одно)
//btnOpenModal.addEventListener('click', modalOpen);

// Прослушивание кнопок открытия модального окна (если их несколько)

btnOpenModal.forEach(function(item) {
item.addEventListener('click', modalOpen)});

// Прослушивание кнопки закрытия модального окна (если их несколько)
btnCloseModal.forEach(function(item){
item.addEventListener('click', modalClose)});
 
// Прослушивание кнопки закрытия модального окна (если оно одно)
//btnCloseModal.addEventListener('click', modalClose);

// Прослушивание оверлея (пространства вне модального окна)
 overlay.addEventListener('click', function() {
 modal.classList.remove('active');
 this.classList.remove('active');
 });

 // Функция открытия модального окна по кнопке
   function modalOpen(event) {
   event.preventDefault();
   createModalCard();
   overlay.classList.add('active');
   modal.classList.add('active');
}
 
// Функция закрытия модального окна по кнопке
function modalClose(event) {
//let parentModal = this.closest('.modal');
//parentModal.classList.remove('active');
modal.classList.remove('active');
overlay.classList.remove('active');
}

/*-----------------ОКОНЧАНИЕ КОДА УПРАВЛЕНИЯ МОДАЛЬНЫМ ОКНОМ-------------------------------*/


export { onAddFavClick };
export { onRemoveFavClick };
export { arrFav} ;
export { modalOpen };
export { modalClose };