// "axios"/ "modern-normalize" /"notiflix" /"tui-pagination" - вже встановлено
// console.log('hello');
const refs = {
    formSelect: document.querySelector('.js-hero-mobile'),
    searchList: document.querySelector('.js-search-menu'),
};

const array = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
];

let markup = [];

function renderLitery(array) {
  markup = array
    .map(element => {
      return `<option class="search-select-one" value="${element}">${element}</option>`;
    })
    .join('');
}

renderLitery(array);

refs.formSelect.insertAdjacentHTML('beforeend', markup);

let markupAlphabet = [];

function renderAlphabet(array) {
      markupAlphabet = array
    .map(element => {
      return `<li class="search-menu-item">${element}</li>`;
    })
    .join('');
}

renderAlphabet(array);
refs.searchList.insertAdjacentHTML("beforeend", markupAlphabet)