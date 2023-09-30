import { fetchRandomCocktails } from './cocktail-api';
import { createMarkup } from './create-card';
import { getScreenWidthValue } from './screen-value';

const cardList = document.querySelector(`.cocktails-list`);
const pageWidth = document.documentElement.scrollWidth;
//console.log(pageWidth);

let quantity = getScreenWidthValue(); //присвоєння значення 8/9 викликом функція яка визначає ширину екрану

fetchRandomCocktails(quantity).then(cocktails => {
  cardList.innerHTML = createMarkup(cocktails);
});

//console.log(allCards);

cardList.addEventListener("click", function(event) {
  if (event.target.dataset.action == "addtofav") {
    console.log("Add to Favorite, ID", event.target.id);
    

  }
  if (event.target.dataset.action == "learnmore") {
    //console.log("Learn More, ID", event.target.id);
    let currentIdCard = event.target.id;
    console.log("Learn More, ID", currentIdCard);
    // додати функцію відкриваня модального вікна за Id коктеля
    
  }
});