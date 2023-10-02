import axios from 'axios';

const BASE_URL = 'https://drinkify.b.goit.study/api/v1';

const fetchData = async (url, params = {}) => {
  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    return [];
  }
};

// Отримати випадкову кількість коктейлів
const fetchRandomCocktails = async quantity => {
  // Виклик функції для отримання даних з API за вказаною кількістю
  return fetchData(`${BASE_URL}/cocktails`, { r: quantity });
};

// Отримати деталі коктейля(-ів) за його/їх ідентифікаторами
const fetchCocktailDetails = async cocktailIds => {
  // Перевірка, чи є передані ідентифікатори одиночним або масивом
  const isSingleId = !Array.isArray(cocktailIds);
  const params = isSingleId
    ? { id: cocktailIds }
    : { ids: cocktailIds.join(',') };
  // Виклик функції для отримання даних з API за вказаними параметрами
  return fetchData(`${BASE_URL}/cocktails/lookup`, params);
};

// Отримати деталі інгредієнта за його ідентифікатором
const fetchIngredientDetails = async ingredientIds => {
  try {
    const ingredientPromises = ingredientIds.map(async ingredientId => {
      const response = await fetchData(
        `${BASE_URL}/ingredients/${ingredientId}`
      );
      return response[0];
    });

    const ingredients = await Promise.all(ingredientPromises);
    return ingredients;
  } catch (error) {
    return [];
  }
};

// Пошук коктейлів за першою літерою в назві
const searchCocktailsByFirstLetter = async firstLetter => {
  // Виклик функції для отримання даних з API з вказаною першою літерою
  return fetchData(`${BASE_URL}/cocktails/search`, { f: firstLetter });
};

// Пошук коктейлів за назвою
const searchCocktailsByName = async name => {
  // Виклик функції для отримання даних з API з вказаною назвою
  return fetchData(`${BASE_URL}/cocktails/search`, { s: name });
};

const fetchIngredientDetailsTest = async ingredientId => {
  // Виклик функції для отримання даних з API за вказаним ідентифікатором
  return fetchData(`${BASE_URL}/ingredients/${ingredientId}`);
};

export {
  fetchRandomCocktails,
  fetchCocktailDetails,
  fetchIngredientDetails,
  searchCocktailsByFirstLetter,
  searchCocktailsByName,
  fetchIngredientDetailsTest,
};
