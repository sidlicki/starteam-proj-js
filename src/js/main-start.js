import { fetchRandomCocktails } from './cocktail-api';
import { createMarkup } from './create-card';
import { getScreenWidthValue } from './screen-value';
import { favoriteCocktails, onRenderOpenModal } from './modal-coctail';
import { onAddFavCocktClick, onRemFavCocktClick } from './add-remove-favorite';
//import { onClickAdd, onClickRem } from './add-remove-favorite-main';

let quantity = getScreenWidthValue(); //присвоєння значення 8/9 викликом функція яка визначає ширину екрану

// Запит на бекенд + відмальовування карток в список (cardList)
fetchRandomCocktails(quantity).then(cocktails => {
  cardList.innerHTML = createMarkup(cocktails);
 // Код для закрашивания сердечка, если коктейль есть в избранных / LS
 // Начало
  let arr = [];
  for (let i = 0; i < cocktails.length; i++) {
    arr.push(cocktails[i]._id)
  }
findAndAddSameElems(arr, favoriteCocktails)
// Конец
});

// Прослуховувач + Обробник кліку по кнопках карток на головній сторінці
const cardList = document.querySelector(`.cocktails-list`); 

cardList.addEventListener('click', function (event) {
  
  const currentIdCard = event.target.id;
  //console.log(event);

  switch (event.target.dataset.action) {
    case 'addtofav':
            
      const iconHeartSet = event.target.children[0].classList;
                     
      if (iconHeartSet.value == 'icon-heart') {
        iconHeartSet.replace('icon-heart', 'icon-heart-addtofavorite');

        onAddFavCocktClick(currentIdCard)
      } else {
        iconHeartSet.replace('icon-heart-addtofavorite', 'icon-heart');

        onRemFavCocktClick(currentIdCard)
      }
      break;
    
    case 'learnmore':
      //console.log('Learn More, ID', currentIdCard);
      // викликати тут функцію відкриваня модального вікна за Id коктеля
      onRenderOpenModal(currentIdCard);        
      break;
  }
});

export { cardList };
  
document.body.addEventListener('click', onClickAdd);
document.body.addEventListener('click', onClickRem);

// Функция формирования массива повторяющихся элементов
// из массива рандомных коктейлей и массива избранных (LS)
function findAndAddSameElems(arr1, arr2) {
  const resultArr = []
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        resultArr.push(arr1[i])
      }
    }
  }
  console.log(resultArr);
  
  for (let k = 0; k < resultArr.length; k++) {
    let btnLeranMore = document.getElementById(resultArr[k]);
    const iconHeart = (btnLeranMore.nextElementSibling).firstElementChild;
    iconHeart.classList.replace('icon-heart', 'icon-heart-addtofavorite');
  }
}

// ADD HEART in ICON 

function onClickAdd(event) {
 if (event.target.name === 'add-cocktail' && event.target.nodeName === 'BUTTON'){
  let cardId = event.target.id;
  //console.log(cardId)
  let btnAdd = document.getElementById(cardId);
  const addSvg = (btnAdd.nextElementSibling).firstElementChild;
  addSvg.classList.replace('icon-heart', 'icon-heart-addtofavorite')
 }
}

// REMOVE HEART from ICON

function onClickRem(event) {
 if (event.target.name === 'remove-cocktail' && event.target.nodeName === 'BUTTON'){
  let cardId = event.target.id;
  // onRemSvg(cardId);
  let btnRem = document.getElementById(cardId);
  const remSvg = (btnRem.nextElementSibling).firstElementChild;
  remSvg.classList.replace('icon-heart-addtofavorite', 'icon-heart')
 }
}

export { onClickAdd, onClickRem };
export { findAndAddSameElems };