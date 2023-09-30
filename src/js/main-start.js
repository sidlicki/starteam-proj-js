import { fetchRandomCocktails } from './cocktail-api';
import { createMarkup } from './create-card';
import { getScreenWidthValue } from './screen-value';

const cardList = document.querySelector(`.cocktails-list`);

let quantity = getScreenWidthValue(); //присвоєння значення 8/9 викликом функція яка визначає ширину екрану

fetchRandomCocktails(quantity).then(cocktails => {
  cardList.innerHTML = createMarkup(cocktails);
});

//console.log(allCards);

// const addFavor = document.querySelectorAll(`.js-add-to`)

// console.log(addFavor)

// window.addEventListener(`click`, handlerAddToFavor)

// function handlerAddToFavor(evt) {
//     if (evt.target.nodeName == '.js-add-to')
//         console.log(evt.target)
// };

// // function handlerAddToFavor(evt) {
// //     console.log(evt.target);

// //  nodeName}

document.body.addEventListener('click', function (event) {
  if (event.target.nodeName == 'BUTTON')
    // console.log(event.target.className);
    console.log('Clicked', event.target.textContent);
  console.log('Clicked', event.target.id);
});
