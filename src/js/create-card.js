import spriteUrl from '/img/svg/sprite.svg';
function createMarkup(arr) {
  return arr
    .map(
      ({ description, drink, drinkThumb, _id }) =>
        `
    <li class="cocktail-card" id="${_id}">
            <img class="cocktail-image" src="${drinkThumb}" onerror="this.src='https://bibliotekant.pl/wp-content/uploads/2021/04/placeholder-image.png'" alt="${drink}" loading="lazy" width="307" height="257"/>
            <h3 class="cocktail-name">${drink.slice(0, 25)}</h3>
            <p class="cocktail-info">${description.slice(0, 115) + '...'}</p>
            <div class="btns-info">
                <button type="button" data-action="learnmore" class="js-learn-more learn-more-button" id="${_id}">Learn more</button>
                <button type="button" data-action="addtofav" class="js-add-to add-to-button" id="${_id}">
                    <svg class="icon-heart" width="18px" height="18px">
                        <use href="${spriteUrl}#icon-heart"></use>
                    </svg>
                </button>
            </div>
        </li>
    `
    )
    .join(``);
}

export { createMarkup };
