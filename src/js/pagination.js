import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import spriteUrl from '/img/svg/sprite.svg';
import defaultImg from '/img/mobile/coctail@2x.webp';
import { getScreenWidthValue } from './screen-value';
import { createArrPage } from './main-start';

let instance;
export function pagiation(
  cocList,
  flag,
  classNameOfContainer,
  numbPhoto,
  currentPage
) {
  let numberOfPhoto = numbPhoto === 6 ? 6 : getScreenWidthValue();
  let maxNumberOfPaginator = 3;
  if (cocList.length <= numberOfPhoto) {
    document.querySelector('.tui-pagination').classList.add('visually-hidden');
  }

  const container = document.getElementById('tui-pagination-container');

  instance = new Pagination(container, {
    totalItems: cocList.length,
    itemsPerPage: numberOfPhoto,
    visiblePages: maxNumberOfPaginator,
  }).getCurrentPage();
  let pagesPaginator = Array.from(document.querySelectorAll('.tui-page-btn'));

  if (Number.isInteger(currentPage) === true) {
    pagesPaginator.forEach(item => {
      if (Number(item.textContent) === currentPage) {
        item.click();
      }
    });
  }
  const createNewArr = () => {
    let newArr = [];
    let numberOfPhotoJ = numberOfPhoto;
    let j = 0;
    for (let i = 0; i < Math.ceil(cocList.length / numberOfPhoto); i++) {
      newArr.push([]);
      for (j; j < numberOfPhotoJ; j++) {
        if (cocList[j] === undefined) {
          break;
        }
        newArr[i].push(cocList[j]);
      }
      numberOfPhotoJ += numberOfPhoto;
    }
    return newArr;
  };

  let cardMarkup;

  ///////////////

  const getAlcoholLabelText = alcoholValue => {
    alcoholValue = alcoholValue.toLowerCase();
    return alcoholValue === 'yes'
      ? 'Alcoholic'
      : alcoholValue === 'no'
      ? 'Non-Alcoholic'
      : 'NA';
  };

  ///////////////

  const renderCards = currentItemPaginator => {
    const markup = createNewArr()
      [currentItemPaginator].map(item => {
        const { _id, drink, drinkThumb, description } = item;

        if (flag === 'byName' || flag === 'byAbc') {
          cardMarkup = `
                <li class="cocktail-card">
                        <img class="cocktail-image" src="${drinkThumb}" onerror="this.src='${defaultImg}'" alt="${drink}" loading="lazy" width="307" height="257"/>
                        <h3 class="cocktail-name">${drink.slice(0, 25)}</h3>
                        <p class="cocktail-info">${
                          description.slice(0, 115) + '...'
                        }</p>
                        <div class="btns-info">
                            <button type="button" data-action="learnmore" class="js-learn-more learn-more-button" id="${_id}">Learn more</button>
                            <button type="button" data-action="addtofav" class="js-add-to add-to-button" id="${_id}">
                                <svg class="icon-heart" width="18px" height="18px">
                                    <use href="${spriteUrl}#icon-heart"></use>
                                </svg>
                            </button>
                        </div>
                    </li>
                `;
        } else if (flag === 'byfavoriteCoctails') {
          cardMarkup = `<li class="cocktail-list-favorite">
                <img class="cocktail-item-img-favorite" src="${drinkThumb}" onerror="this.src='${defaultImg}'" alt="preview cocktail" width="307" height="auto">
                <div class="trk">
                <h2 class="cocktail-name-favorite">${drink.slice(0, 25)}</h2>
                <p class="description-container-favorite">${
                  description.slice(0, 111) + ' . . .'
                }</p>
                <div class="button-wrap-favorite" >
                    <button type="button" data-action="learnmore" class="learn-more-favorite" id="${_id}">LEARN MORE</button>
                    <button type="button" class="remove-favorite" id="${_id}">
                        <svg class="svg-icon-favorite-trash" width="18" height="18">
                            <use href="${spriteUrl}#icon-trash"></use>
                        </svg>
                    </button>
                </div>
                </div>
            </li>`;
        } else {
          cardMarkup = `
                <li class="fav-ingredients-list-item" data-ingredient-id="${
                  item._id
                }">
                  <h2 class="fav-ingredient-title">${
                    item.title || 'No title'
                  }</h2>
                  <p class="fav-ingredient-alcohol">${getAlcoholLabelText(
                    item.alcohol
                  )}</p>
                  <p class="fav-ingredient-description">${
                    item.description || 'No description'
                  }</p>
                  <div class="fav-ingredients-buttons-wrapper">
                    <button
                      type="button"
                      class="fav-ingredients-learn-more-btn"
                      data-action="ingredient-learn-more">Learn more</button>
                    <button
                      type="button"
                      class="fav-ingredients-remove-from-fav-btn"
                      data-action="igredient-remove-from-favorite">
                        <svg
                          class="fav-ingredients-icon-trash"
                          width="18px"
                          height="18px"
                          aria-label="Remove favorite ingredient"
                          >
                            <use href="${spriteUrl}#icon-trash"></use>
                        </svg>
                    </button>
                  </div>
                </li>`;
        }

        return cardMarkup;
      })
      .join('');
    document.querySelector(`.${classNameOfContainer}`).innerHTML = markup;
  };

  const value = Number.isInteger(currentPage) === true ? currentPage - 1 : 0;
  renderCards(value);
  createArrPage(createNewArr()[value]);

  const addClassNumber = () => {
    const arrOfAllItem = Array.from(document.querySelectorAll('.tui-page-btn'));
    arrOfAllItem.forEach(item => {
      if (Number.isInteger(Number(item.textContent))) {
        item.classList.add('tui-number-item');
      }
    });
  };
  addClassNumber();

  function clickFunc(e) {
    addClassNumber();
    try {
      if (e.target === e.currentTarget) {
        return;
      }

      if (
        e.target.classList.contains('tui-prev') ||
        e.target.classList.contains('tui-ico-prev')
      ) {
        renderCards(
          Number(document.querySelector('.tui-is-selected').textContent) - 1
        );
        createArrPage(
          createNewArr()[
            Number(document.querySelector('.tui-is-selected').textContent) - 1
          ]
        );
      }

      if (
        e.target.classList.contains('tui-next') ||
        (e.target.classList.contains('tui-ico-next') &&
          e.target.classList.contains('tui-is-disabled') === false)
      ) {
        renderCards(
          Number(document.querySelector('.tui-is-selected').textContent) - 1
        );
        createArrPage(
          createNewArr()[
            Number(document.querySelector('.tui-is-selected').textContent) - 1
          ]
        );
      }

      if (e.target.classList.contains('tui-number-item')) {
        renderCards(Number(e.target.textContent) - 1);
        createArrPage(createNewArr()[Number(e.target.textContent) - 1]);
      }
    } catch {}
  }
  container.addEventListener('click', clickFunc);
}
