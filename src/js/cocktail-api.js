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

// TODO: REMOVE ------------- USAGE EXAMPLES -------------
// -----  cocktailIds -----
// 639b6de9ff77d221f190c68e
// 639b6de9ff77d221f190c579
// 639b6de9ff77d221f190c595
// 639b6de9ff77d221f190c60f

// ----- ingredientIds -----
// 64aebb7f82d96cc69e0eb4c1
// 64aebb7f82d96cc69e0eb4bc
// 64aebb7f82d96cc69e0eb4a6

// fetchRandomCocktails(9).then(cocktails =>
//   console.log('Random cocktails', cocktails)
// );

// fetchCocktailDetails('639b6de9ff77d221f190c68e').then(cocktails =>
//   console.log('Cocktail details', cocktails)
// );

// fetchCocktailDetails(['639b6de9ff77d221f190c68e']).then(cocktails =>
//   console.log('Cocktail details', cocktails)
// );

// fetchCocktailDetails([
//   '639b6de9ff77d221f190c68e',
//   '639b6de9ff77d221f190c579',
// ]).then(cocktails => console.log('Cocktail details', cocktails));

// fetchIngredientDetails('64aebb7f82d96cc69e0eb4c1').then(ingredientDetails =>
//   console.log('Ingredient details', ingredientDetails)
// );

// searchCocktailsByFirstLetter('0').then(cocktails =>
//   console.log('Search cocktails by first letter', cocktails)
// );

// searchCocktailsByFirstLetter('1').then(cocktails =>
//   console.log('Search cocktails by first letter', cocktails)
// );

// searchCocktailsByName('1asfashgsadgfhs').then(cocktails =>
//   console.log('Search cocktails by name', cocktails)
// );

// searchCocktailsByName('abc').then(cocktails =>
//   console.log('Search cocktails by name', cocktails)
// );

// ------------- /REMOVE USEGE EXAMPLES -------------

export {
  fetchRandomCocktails,
  fetchCocktailDetails,
  fetchIngredientDetails,
  searchCocktailsByFirstLetter,
  searchCocktailsByName,
};
