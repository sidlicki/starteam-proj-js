import { fetchRandomCocktails } from './cocktail-api';
import { createMarkup } from './create-card';
import { getScreenWidthValue } from './screen-value';
import { favoriteCocktails, onRenderOpenModal } from './modal-coctail';
import { onAddFavCocktClick, onRemFavCocktClick } from './add-remove-favorite';

const cardList = document.querySelector(`.cocktails-list`); //

let quantity = getScreenWidthValue(); //присвоєння значення 8/9 викликом функція яка визначає ширину екрану

fetchRandomCocktails(quantity).then(cocktails => {
  cardList.innerHTML = createMarkup(cocktails);
});

// Потрібна перевірка, чи є вже Улюблені коктейлі...
// Зробити файл з загальними змінними для всіх...

// let favoriteCocktails =
//   JSON.parse(localStorage.getItem('favoriteCocktails')) || [];

// function isInFavorite(currentIdCard) {
//   const indexModalFav = favoriteCocktails.findIndex(
//     item => item === currentIdCard);
  
//   console.log(indexModalFav);

//    if (indexModalFav !== -1) {
//       btnModalAddFav.classList.add('is-hidden');
//       btnModalRemoveFav.classList.remove('is-hidden');
//     } 
// }

//let favCocktailIds = JSON.parse(localStorage.getItem(favoriteId)) || [];
//console.log(favoriteCocktails);

// Прослуховувач + Обробник кліку по кнопках карток на головній сторінці

cardList.addEventListener('click', function (event) {
  
  const currentIdCard = event.target.id;
  //console.log(event);

  switch (event.target.dataset.action) {
    case 'addtofav':
      console.log('Add to Favorite, ID', currentIdCard);

      // isInFavorite(currentIdCard)
      // викликати тут функцію. котра додає/забирає елемент до локал сторейдж
      
      // event.target.children[0].classList.replace('icon-heart', 'icon-heart-addtofavorite')
      // console.log(event.target.children[0].classList.value);
      
      const iconHeartSet = event.target.children[0].classList;
      
      // const indexModalFav = favoriteCocktails.findIndex(
      //   item => item === currentIdCard
      // );
            
      if (iconHeartSet.value == 'icon-heart') {
        iconHeartSet.replace('icon-heart', 'icon-heart-addtofavorite');
        //console.log(iconHeartSet.value);

        onAddFavCocktClick(currentIdCard)
      } else {
        iconHeartSet.replace('icon-heart-addtofavorite', 'icon-heart');
        //console.log(iconHeartSet.value);

        onRemFavCocktClick(currentIdCard)
      }
      //console.log(favoriteCocktails);
      break;
    
    case 'learnmore':
      //console.log('Learn More, ID', currentIdCard);
      // викликати тут функцію відкриваня модального вікна за Id коктеля
      onRenderOpenModal(currentIdCard);        
      break;
  }
});

export { cardList };
  
// ADD HEART in ICON

document.body.addEventListener('click', onClickAdd);

function onClickAdd(event) {
 if (event.target.name === 'add-cocktail' && event.target.nodeName === 'BUTTON'){
   let cardId = event.target.id;
    console.log(cardId)

   onAddSvg(cardId);
 }
}

function onAddSvg(cardId) {
  let btnAdd = document.getElementById(cardId);
  const addSvg = (btnAdd.nextElementSibling).firstElementChild;
  addSvg.classList.replace('icon-heart', 'icon-heart-addtofavorite')
}
  
// REMOVE HEART from ICON
document.body.addEventListener('click', onClickRem);

function onClickRem(event) {
 if (event.target.name === 'remove-cocktail' && event.target.nodeName === 'BUTTON'){
   let cardId = event.target.id;
   onRemSvg(cardId);
 }
}

function onRemSvg(cardId) {
  let btnRem = document.getElementById(cardId);
  const remSvg = (btnRem.nextElementSibling).firstElementChild;
  remSvg.classList.replace('icon-heart-addtofavorite', 'icon-heart')
}

