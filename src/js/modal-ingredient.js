// "axios"/ "modern-normalize" /"notiflix" /"tui-pagination" - вже встановлено
// console.log('hello');

  const getIgredients = document.querySelector(".ingredient-content");
  const favoriteButton = document.querySelector(".favorite-btn");
  const backButton = document.querySelector(".back-btn");

  const newElement = document.createElement("div");
  newElement.innerHTML = `<h3 class="ingredient-modal-name">Campari</h3>
    <h3 class="ingredient-modal-type">Liqueur</h3>
  
    <p class="ingredient-modal-descr">
      <span class="modal-span">Campari</span> is an Italian
      alcoholic liqueur, considered an apéritif (20.5%, 21%, 24%, 25%, or
      28.5% ABV, depending on the country in which it is sold), obtained from
      the infusion of herbs and fruit (including chinotto and cascarilla) in
      alcohol and water. It is a bitters, characterised by its dark red
      colour.
    </p>
  
    <ul class="ingredient-modal-list">
      <li class="ingredient-modal-list-item">Type: Bitters</li>
      <li class="ingredient-modal-list-item">Country of origin: Italy</li>
      <li class="ingredient-modal-list-item">
        Alcohol by volume: 20.5 - 28.5 %
      </li>
      <li class="ingredient-modal-list-item">
        Flavour : Bitter, spicy and sweet
      </li>
    </ul>`;

  getIgredients.appendChild(newElement);
