console.log('привіт');
// import { renderCocktail } from "./render_function_for_cocktail";
// import "./cocktails-modal";
// import { resetPagination, generatePagination } from './pagination';

// =======================================================================================//

// Функція для збереження даних в localStorage
function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Функція для отримання даних з localStorage
function getFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

// Очікуємо завантаження DOM перед викликом функції
document.addEventListener('DOMContentLoaded', generateCocktails);

// Головна функція для генерації списку коктейлів
function generateCocktails() {
    // Отримуємо елемент ul з класом "fav-cocktail-list"
    const favCocktailList = document.querySelector('.fav-cocktail-list');

    // Отримуємо дані з локального сховища
    const localFavorite = JSON.parse(localStorage.getItem('favoriteList'));

    // Виводимо блок "not-found" або список коктейлів залежно від умов
    if (localFavorite === null || localFavorite.favoriteCocktails.length <= 0) {
        // Якщо немає, виводимо блок "not-found" та ховаємо список коктейлів
        favCocktailList.style.display = 'none';
        generateNotFoundBlock();
    } else {
        // Якщо є, відображаємо список коктейлів та ховаємо блок "not-found"
        favCocktailList.style.display = 'block';
        document.querySelector('.not-found').style.display = 'none';

      
        // Отримуємо список улюблених коктейлів
        const favoriteCocktails = localFavorite.favoriteCocktails;
        let drink = {
            drinks: []
        };

        // Вибираємо лише ті коктейлі, які мають ідентифікатор
        favoriteCocktails.forEach(element => {
            if (element.idDrink !== 0) {
                drink.drinks.push(element);
            }
        });

        // Виводимо коктейлі
        document.querySelector('.cocktail-list').innerHTML = renderCocktail(sliceArray(drink.drinks)).join('');
    }
}

// Функція для генерації блоку "not-found" у випадку відсутності улюблених коктейлів
function generateNotFoundBlock() {
    // Вставляємо контент в блок "not-found"
    document.querySelector('.not-found').innerHTML = `
        <picture>
            <!-- DESKTOP -->
            <source srcset="/img/tablet/coctail.webp 1x, /img/tablet/coctail@2x.webp 2x" type="image/webp" media="(min-width: 1280px)">
            <!-- TABLET -->
            <source srcset="/img/tablet/coctail.webp 1x, /img/tablet/coctail@2x.webp 2x" type="image/webp" media="(min-width: 768px)">
            <!-- MOBILE -->
            <source srcset="/img/mobile/coctail.webp 1x, /img/mobile/coctail@2x.webp 2x" type="image/webp" media="(min-width: 320px)">
            <img class="no-fav-cocktail-img" src="/img/tablet/coctail.webp" alt="cocktail">
        </picture>
        <p class="no-fav-cocktail-text">
            You haven't added any
            <span class="no-fav-cocktail-color">favorite cocktails</span> yet
        </p>
    `;
}

// Функція для генерації обрізаного масиву коктейлів
function sliceArray(array) {
   
    const start = (currPage - 1) * pageSize;
    const end = start + pageSize;
    const res = array.slice(start, end);
    return { drinks: res };
}

