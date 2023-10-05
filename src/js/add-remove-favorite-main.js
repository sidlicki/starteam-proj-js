
// ADD HEART in ICON 

function onClickAdd(event) {
 if (event.target.name === 'add-cocktail' && event.target.nodeName === 'BUTTON'){
  let cardId = event.target.id;
  //console.log(cardId)
  let btnAdd = document.getElementById(cardId);
  const addSvg = (btnAdd.nextElementSibling).firstElementChild;
  addSvg.classList.replace('icon-heart', 'icon-heart-addtofavorite')
 }
}

// REMOVE HEART from ICON

function onClickRem(event) {
 if (event.target.name === 'remove-cocktail' && event.target.nodeName === 'BUTTON'){
  let cardId = event.target.id;
  // onRemSvg(cardId);
  let btnRem = document.getElementById(cardId);
  const remSvg = (btnRem.nextElementSibling).firstElementChild;
  remSvg.classList.replace('icon-heart-addtofavorite', 'icon-heart')
 }
}

export { onClickAdd, onClickRem };