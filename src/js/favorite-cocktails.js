import { fetchCocktailDetails } from "./cocktail-api";
import spriteUrl from '../img/svg/sprite.svg';
import noCoctailMobWebp from '/img/mobile/coctail.webp';
import noCoctailMobWebp2x from '/img/mobile/coctail@2x.webp';
import noCoctailTabWebp from '/img/tablet/coctail.webp';
import noCoctailTabWebp2x from '/img/tablet/coctail@2x.webp';

// ["639b6de9ff77d221f190c52f","639b6de9ff77d221f190c521","639b6de9ff77d221f190c52a","639b6de9ff77d221f190c529","639b6de9ff77d221f190c523","639b6de9ff77d221f190c51a","639b6de9ff77d221f190c526","639b6de9ff77d221f190c528","639b6de9ff77d221f190c52d"]
document.addEventListener('DOMContentLoaded', generateCocktails);
// структура картки 
const renderCocktail = (arr, container) => {
        const list = arr.map((item) =>
            `<li class="cocktail-list-favorite">
            <img class="cocktail-item-img-favorite" src="${item.drinkThumb}" alt="preview cocktail" width="307" height="auto">
            <div class="trk">
            <h2 class="cocktail-name-favorite">${item.drink}</h2>
            <p class="description-container-favorite">${item.description.slice(0, 111) + '...'}</p>
            <div class="button-wrap-favorite" data-id-drink='${item._id}'>
                <button type="button" class="learn-more-favorite">LEARN MORE</button>
                <button type="button" class="remove-favorite">
                    <svg class="svg-icon-favorite-trash" width="18" height="18">
                        <use href="${spriteUrl}#icon-trash"></use>
                    </svg>
                </button>
            </div>
            </div>
        </li>`).join('');
        container.insertAdjacentHTML("beforeend", list);
    }

// функція для генерації списку коктейлів
    async function generateCocktails() {
    
        const favCocktailList = document.querySelector('.fav-cocktail-list');
        const notFoundBlock = document.querySelector('.not-found');
    
    const localFavorite = JSON.parse(localStorage.getItem('favoriteList')) || [];
    console.log(localFavorite);
        if (localFavorite.length > 0) {
            notFoundBlock.classList.add('is-hidden');
            console.log(localFavorite.length);
            const data = await fetchCocktailDetails(localFavorite.map(cocktail => cocktail));
            console.log(data);
            renderCocktail(data, favCocktailList);
            
        } else {
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
            notFoundBlock.style.display = 'block';
            favCocktailList.innerHTML = ''; 
        }
   
}

