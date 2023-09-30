// "axios"/ "modern-normalize" /"notiflix" /"tui-pagination" - вже встановлено

function searchCocktail(event) {

    event.preventDefault();

    var searchQuery = document.getElementById('searchInput').value.toLowerCase();

    var allCocktails = document.querySelectorAll('.cocktail');

    var foundCocktails = Array.from(allCocktails).filter(cocktail => {
        var cocktailName = cocktail.textContent.toLowerCase();
        return cocktailName.includes(searchQuery);
    });

    displayResults(foundCocktails.length > 0, foundCocktails);
}

function displayResults(found, cocktails) {
    var cocktailResults = document.getElementById('cocktailResults');
    cocktailResults.innerHTML = '';

    if (found) {
        cocktails.forEach(cocktail => {
            cocktail.style.display = 'block';
            cocktailResults.appendChild(cocktail.cloneNode(true));
        });
    } else {
        cocktailResults.innerHTML = '<p>Sorry, we didn’t find any cocktail for you</p>';
    }
}