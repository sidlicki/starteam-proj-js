import { fetchCocktailDetails } from './cocktail-api';
import spriteUrl from '../img/svg/sprite.svg';
import { onRemFavCocktClick } from './add-remove-favorite';
import { favoriteCocktails, onRenderOpenModal } from './modal-coctail';

import defaultImg from '/img/mobile/coctail@2x.webp';
import noCoctailMobWebp from '/img/mobile/coctail.webp';
import noCoctailMobWebp2x from '/img/mobile/coctail@2x.webp';
import noCoctailTabWebp from '/img/tablet/coctail.webp';
import noCoctailTabWebp2x from '/img/tablet/coctail@2x.webp';

import Pagination from 'tui-pagination';
import {pagiation} from "./pagination";
import 'tui-pagination/dist/tui-pagination.css';

const favCocktailList = document.querySelector('.fav-cocktail-list');
const notFoundBlock = document.querySelector('.not-found');
document.addEventListener('DOMContentLoaded', generateCocktails);

// Оновлено: додавання обробників подій для кнопок видалення
function addRemoveFavoriteButtonClickHandlers() {
  const removeFavoriteButtons = document.querySelectorAll('.remove-favorite');
  
  removeFavoriteButtons.forEach(button => {
    
    
    button.addEventListener('click', () => {
      let currentPage;

      const cocktailId = button.id;
      onRemFavCocktClick(cocktailId);
      
      if(document.querySelector(".tui-pagination").classList.contains("visually-hidden")===false){
      
        if(removeFavoriteButtons.length!==0){
          
          currentPage = Number(document.querySelector(".tui-is-selected").textContent);
          
          if(removeFavoriteButtons.length===1){
              currentPage = Number(document.querySelector(".tui-is-selected").textContent);
              currentPage=currentPage-1
      }
    }}
    
      console.log("favoriteCurrentPage= "+currentPage);
      generateCocktails(currentPage); // Оновлено: оновіть дані після видалення коктейлю
    });
  });
}

function clicPaginator(e){
  if (e.target===e.currentTarget){
    return
  }
  console.log("clickkk")
  addRemoveFavoriteButtonClickHandlers();
  
}

// структура картки
// const renderCocktail = (arr, container) => {
//   const list = arr
//     .map(
//       item =>
//         `<li class="cocktail-list-favorite">
//             <img class="cocktail-item-img-favorite" src="${
//               item.drinkThumb
//             }" onerror="this.src='${defaultImg}'" alt="preview cocktail" width="307" height="auto">
//             <div class="trk">
//             <h2 class="cocktail-name-favorite">${item.drink.slice(0, 25)}</h2>
//             <p class="description-container-favorite">${
//               item.description.slice(0, 111) + ' . . .'
//             }</p>
//             <div class="button-wrap-favorite" >
//                 <button type="button" data-action="learnmore" class="learn-more-favorite" id="${
//                   item._id
//                 }">LEARN MORE</button>
//                 <button type="button" class="remove-favorite" id="${item._id}">
//                     <svg class="svg-icon-favorite-trash" width="18" height="18">
//                         <use href="${spriteUrl}#icon-trash"></use>
//                     </svg>
//                 </button>
//             </div>
//             </div>
//         </li>`
//     )
//     .join('');
  
//   container.innerHTML = list; // Оновлено: використовуємо innerHTML для заміни вмісту контейнера
//   addRemoveFavoriteButtonClickHandlers(); // Оновлено: додали обробники подій для нових кнопок видалення
// };

// функція для генерації списку коктейлів
export async function generateCocktails(currentPage) {
  

  const localFavorite =
    JSON.parse(localStorage.getItem('favoriteCocktails')) || [];
  
  if (localFavorite.length > 0) {
    notFoundBlock.classList.add('is-hidden');
    const data = await fetchCocktailDetails(
      localFavorite.map(cocktail => cocktail)
    );
      console.log(data);
      //renderCocktail(data, favCocktailList);
      pagiation(data, "byfavoriteCoctails", "fav-cocktail-list",6,currentPage);
      addRemoveFavoriteButtonClickHandlers();
      document.querySelector(".tui-pagination").addEventListener("click",clicPaginator)
      
      
      notFoundBlock.innerHTML = '';
  } else {
    document.querySelector(".tui-pagination").classList.add("visually-hidden"); 
    notFoundBlock.classList.remove('is-hidden');
    notFoundBlock.innerHTML = `
            <picture>
                <!-- TABLET -->
                <source srcset="${noCoctailTabWebp} 1x, ${noCoctailTabWebp2x} 2x" type="image/webp" media="(min-width: 768px)">
                <!-- MOBILE -->
                <source srcset="${noCoctailMobWebp} 1x, ${noCoctailMobWebp2x} 2x" type="image/webp" media="(min-width: 320px)">
                <img class="no-fav-cocktail-img" src="${noCoctailMobWebp}" alt="cocktail">
            </picture>
            <p class="no-fav-cocktail-text">
                You haven't added any
                <span class="no-fav-cocktail-color">favorite cocktails</span> yet
            </p>
        `;
    // notFoundBlock.style.display = 'block';
    favCocktailList.innerHTML = '';
  }

  addRemoveFavoriteButtonClickHandlers(); // Оновлено: додали обробники подій для кнопок видалення
}


favCocktailList.addEventListener('click', function (event) {
  const currentIdCard = event.target.id;
   switch (event.target.dataset.action) {
     case 'learnmore':
           onRenderOpenModal(currentIdCard);
           
      break;
  }
});

document.body.addEventListener('click', (event) => {
  if (event.target.name === 'remove-cocktail' || event.target.name === 'add-cocktail') {
    generateCocktails();
  }
})

// document.body.addEventListener('click', async (event) => {
//   if (event.target.name === 'remove-cocktail' || event.target.name === 'add-cocktail') {
//     const localFavorite = JSON.parse(localStorage.getItem('favoriteCocktails')) || [];
    
//     if (localFavorite.length > 0) {
//       generateCocktails();
//     } else {
//       // Якщо список фейворитів порожній, приховати список і відобразити блок not-found
//       favCocktailList.innerHTML = '';
//       notFoundBlock.classList.remove('is-hidden');
//       notFoundBlock.innerHTML = `
//             <picture>
//                 <!-- TABLET -->
//                 <source srcset="${noCoctailTabWebp} 1x, ${noCoctailTabWebp2x} 2x" type="image/webp" media="(min-width: 768px)">
//                 <!-- MOBILE -->
//                 <source srcset="${noCoctailMobWebp} 1x, ${noCoctailMobWebp2x} 2x" type="image/webp" media="(min-width: 320px)">
//                 <img class="no-fav-cocktail-img" src="${noCoctailMobWebp}" alt="cocktail">
//             </picture>
//             <p class="no-fav-cocktail-text">
//                 You haven't added any
//                 <span class="no-fav-cocktail-color">favorite cocktails</span> yet
//             </p>
//         `;
//     }
//   }
// });
