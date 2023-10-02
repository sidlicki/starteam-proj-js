

import { favoriteCocktails } from './modal-coctail';

import { favoriteIngredients } from './modal-ingredient';

// Add to Favorite Cocktails   
    function onAddFavCocktClick(cocktailId) {
    const indexFavCockt = favoriteCocktails.findIndex(
      item => item === cocktailId
    );
    if (indexFavCockt === -1) {
      favoriteCocktails.push(cocktailId);
      localStorage.setItem(
        'favoriteCocktails',
        JSON.stringify(favoriteCocktails)
      );
      return favoriteCocktails;
    }
  }
  
    // Remove from Favorite Cocktails
       function onRemFavCocktClick(cocktailId) {
        const indFavRem = favoriteCocktails.findIndex(
         item => item === cocktailId
       );
       if (indFavRem !== -1) {
         favoriteCocktails.splice(indFavRem, 1);
         localStorage.setItem(
          'favoriteCocktails',
           JSON.stringify(favoriteCocktails)
         );
         return favoriteCocktails;
      }
     }

    // Add to Favorite Ingreients   
   function onAddFavIngredClick(ingredientId) {
     const indexFavIngred = favoriteIngredients.findIndex(
      item => item === ingredientId
    );
    if (indexFavIngred === -1) {
        favoriteIngredients.push(ingredientId);
      localStorage.setItem(
        'favoriteIngredients',
        JSON.stringify(favoriteIngredients)
      );
      return favoriteIngredients;
    }
  }
  
    // Remove from Favorite Ingredients
    function onRemFavIngredClick(ingredientId) {
      const indFavRem = favoriteIngredients.findIndex(
        item => item === ingredientId
      );
      if (indFavRem !== -1) {
        favoriteIngredients.splice(indFavRem, 1);
        localStorage.setItem(
          'favoriteIngredients',
          JSON.stringify(favoriteIngredients)
        );
        return favoriteIngredients;
     }
    }

    export { 
             onAddFavCocktClick, 
             onRemFavCocktClick,
             onAddFavIngredClick,
             onRemFavIngredClick 
           }