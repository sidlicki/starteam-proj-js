function createMarkup(arr) {
  return arr
    .map(
      ({ description, drink, drinkThumb, _id }) =>
        `
    <div class="cocktail-card" id="${_id}">
            <img class="cocktail-image" src="${drinkThumb}" alt="${drink}" loading="lazy" width="307" height="257"/>
            <h3 class="cocktail-name">${drink}</h3>
            <p class="cocktail-info">${description}</p>
            <div class="btns-info">
                <button type="button" class="js-learn-more learn-more-button js-modal-open" id="${_id}">Learn more</button>
                <button type="button" class="js-add-to add-to-button" id="${_id}">
                    <svg class="icon-heart" width="20px" height="16px">
                        <use href="../img/svg/sprite.svg#icon-heart"></use>
                    </svg>
                </button>
            </div>
        </div>
    `
    )
    .join(``);
}

export { createMarkup };
