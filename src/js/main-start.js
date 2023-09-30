import { fetchRandomCocktails } from './cocktail-api';
import { createMarkup } from './create-card';

const cardList = document.querySelector(`.cocktails-list`);

let quantity = 9;

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

document.body.addEventListener("click", function(event) {
    if (event.target.nodeName == "BUTTON")
        // console.log(event.target.className);
        console.log("Clicked", event.target.textContent);
        console.log("Clicked", event.target.id)
    
  });