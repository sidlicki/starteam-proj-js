import { fetchRandomCocktails } from './cocktail-api';
import { createMarkup } from './create-card';
import { getScreenWidthValue } from './screen-value';
import { favoriteCocktails, onRenderOpenModal } from './modal-coctail';
import { onAddFavCocktClick, onRemFavCocktClick } from './add-remove-favorite';

const cardList = document.querySelector(`.cocktails-list`); //

let quantity = getScreenWidthValue(); //присвоєння значення 8/9 викликом функція яка визначає ширину екрану

fetchRandomCocktails(quantity).then(cocktails => {
  if (cardList) {
    cardList.innerHTML = createMarkup(cocktails);
  }
  createArrPage(cocktails);
});

// Прослуховувач + Обробник кліку по кнопках карток на головній сторінці

if (cardList) {
  cardList.addEventListener('click', function (event) {
    const currentIdCard = event.target.id;
    //console.log(event);

    switch (event.target.dataset.action) {
      case 'addtofav':
        const iconHeartSet = event.target.children[0].classList;

        if (iconHeartSet.value == 'icon-heart') {
          iconHeartSet.replace('icon-heart', 'icon-heart-addtofavorite');

          onAddFavCocktClick(currentIdCard);
        } else {
          iconHeartSet.replace('icon-heart-addtofavorite', 'icon-heart');

          onRemFavCocktClick(currentIdCard);
        }
        break;

      case 'learnmore':
        onRenderOpenModal(currentIdCard);
        break;
    }
  });
}

export { cardList };

// ADD HEART in ICON

document.body.addEventListener('click', onClickAdd);

function onClickAdd(event) {
  if (
    event.target.name === 'add-cocktail' &&
    event.target.nodeName === 'BUTTON'
  ) {
    let cardId = event.target.id;
    console.log(cardId);

    onAddSvg(cardId);
  }
}

function onAddSvg(cardId) {
  let btnAdd = document.getElementById(cardId);
  const addSvg = btnAdd.nextElementSibling.firstElementChild;
  addSvg.classList.replace('icon-heart', 'icon-heart-addtofavorite');
}

// REMOVE HEART from ICON
document.body.addEventListener('click', onClickRem);

function onClickRem(event) {
  if (
    event.target.name === 'remove-cocktail' &&
    event.target.nodeName === 'BUTTON'
  ) {
    let cardId = event.target.id;
    onRemSvg(cardId);
  }
}

function onRemSvg(cardId) {
  let btnRem = document.getElementById(cardId);
  const remSvg = btnRem.nextElementSibling.firstElementChild;
  remSvg.classList.replace('icon-heart-addtofavorite', 'icon-heart');
}

//////////////////////////////////////////
export function findAndAddSameElems(arr1, arr2) {
  const resultArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        resultArr.push(arr1[i]);
      }
    }
  }

  for (let k = 0; k < resultArr.length; k++) {
    let btnLearnMore = document.getElementById(resultArr[k]);
    if (btnLearnMore) {
      let iconHeart = btnLearnMore.nextElementSibling.firstElementChild;
      iconHeart.classList.replace('icon-heart', 'icon-heart-addtofavorite');
    }
  }
}

////////////////////////////////////////////
export function createArrPage(arrPage) {
  let arr = [];

  for (let i = 0; i < arrPage.length; i++) {
    arr.push(arrPage[i]._id);
  }
  findAndAddSameElems(arr, favoriteCocktails);
  return arr;
}
