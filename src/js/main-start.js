import { fetchRandomCocktails } from './cocktail-api';
import { createMarkup } from './create-card';
import { getScreenWidthValue } from './screen-value';

const cardList = document.querySelector(`.cocktails-list`);
//nconst pageWidth = document.documentElement.scrollWidth;
//console.log(pageWidth);

let quantity = getScreenWidthValue(); //присвоєння значення 8/9 викликом функція яка визначає ширину екрану

fetchRandomCocktails(quantity).then(cocktails => {
  cardList.innerHTML = createMarkup(cocktails);
});

//console.log(allCards);

let favoriteId = `cards-id`;
let favCocktailIds = JSON.parse(localStorage.getItem(favoriteId)) || [];

cardList.addEventListener('click', function (event) {
  
  const currentIdCard = event.target.id;

  if (event.target.dataset.action == 'addtofav') {
    // викликати тут функцію. котра додає/забирає елемент до локал сторейдж
    console.log('Add to Favorite, ID', currentIdCard);

    favCocktailIds.push(currentIdCard);

    localStorage.setItem(favoriteId, JSON.stringify(favCocktailIds)) 
    console.log(favCocktailIds);

    
    
    
    //localStorage.setItem(`id-card`, JSON.stringify(favCocktailIds))

  }
  if (event.target.dataset.action == 'learnmore') {
    //console.log("Learn More, ID", event.target.id);
    console.log('Learn More, ID', currentIdCard);
    // викликати тут функцію відкриваня модального вікна за Id коктеля

  }
});


