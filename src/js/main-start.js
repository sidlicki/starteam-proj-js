import { fetchRandomCocktails } from './cocktail-api';
import { createMarkup } from './create-card';
import { getScreenWidthValue } from './screen-value';
import { favoriteCocktails, onRenderOpenModal } from './modal-coctail';
import { onAddFavCocktClick, onRemFavCocktClick } from './add-remove-favorite';

const cardList = document.querySelector(`.cocktails-list`);
//nconst pageWidth = document.documentElement.scrollWidth;
//console.log(pageWidth);
// Потрібна перевірка, чи є вже Улюблені коктейлі...
// Зробити файл з загальними змінними для всіх...

let quantity = getScreenWidthValue(); //присвоєння значення 8/9 викликом функція яка визначає ширину екрану

fetchRandomCocktails(quantity).then(cocktails => {
  cardList.innerHTML = createMarkup(cocktails);
});

//console.log(allCards);

//let favCocktailIds = JSON.parse(localStorage.getItem(favoriteId)) || [];
//console.log(favoriteCocktails);

cardList.addEventListener('click', function (event) {
  
const currentIdCard = event.target.id;
  //console.log(event);

  switch (event.target.dataset.action) {
    case 'addtofav':
      console.log('Add to Favorite, ID', currentIdCard);
      // викликати тут функцію. котра додає/забирає елемент до локал сторейдж
      // зробити пееремикач
      
      onAddFavCocktClick(currentIdCard)


      console.log(favoriteCocktails);





    
      break;
    
    case 'learnmore':
      //console.log('Learn More, ID', currentIdCard);
      // викликати тут функцію відкриваня модального вікна за Id коктеля
      onRenderOpenModal(currentIdCard);        
      break;
  }
});

export { cardList };
