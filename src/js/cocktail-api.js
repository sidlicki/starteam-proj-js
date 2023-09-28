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

const fetchRandomCocktails = async quantity => {
  return fetchData(`${BASE_URL}/cocktails`, { r: quantity });
};

const fetchCocktailDetails = async cocktailIds => {
  const isSingleId = !Array.isArray(cocktailIds);
  const params = isSingleId
    ? { id: cocktailIds }
    : { ids: cocktailIds.join(',') };
  return fetchData(`${BASE_URL}/cocktails/lookup`, params);
};

const fetchIngredientDetails = async ingredientId => {
  return fetchData(`${BASE_URL}/ingredients/${ingredientId}`);
};

const searchCocktailsByFirstLetter = async firstLetter => {
  return fetchData(`${BASE_URL}/cocktails/search`, { f: firstLetter });
};

const searchCocktailsByName = async name => {
  return fetchData(`${BASE_URL}/cocktails/search`, { s: name });
};

export {
  fetchRandomCocktails,
  fetchCocktailDetails,
  fetchIngredientDetails,
  searchCocktailsByFirstLetter,
  searchCocktailsByName,
};
