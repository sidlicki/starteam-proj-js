import{n as r,a as o,s as d,b as c}from"./coctail@2x-78857b83.js";let a,l=JSON.parse(localStorage.getItem("favoriteIngredients")||"[]");const g=e=>(e=e.toLowerCase(),e==="yes"?"Alcoholic":e==="no"?"Non-Alcoholic":"NA"),s=document.querySelector(".fav-ingredients-container"),v=`
  <div class="no-fav-ingredients-wrapper">
    <img
      class="cocktail-photo-placeholder"
      srcset="${r} 1x, ${o} 2x"
      src="${r}"
      alt="Favorite Cocktail Image Placeholder"
      width="142"
      height="122"
    />
    <p class="no-fav-ingredients-text">
      You haven't added any
      <span class="no-fav-ingredients-text-accent"> favorite ingredients </span>yet
    </p>
  </div>
  `,p=({_id:e,title:t,alcohol:n,description:i})=>`
        <li class="fav-ingredients-list-item">
          <h2 class="fav-ingredient-title">${t||"No title"}</h2>
          <p class="fav-ingredient-alcohol">${g(n)}</p>
          <p class="fav-ingredient-description">${i||"No description"}</p>
          <div class="fav-ingredients-buttons-wrapper">
            <button type="button" class="fav-ingredients-learn-more-btn" data-ingredient-id="${e}">Learn more</button>
            <button type="button" class="fav-ingredients-remove-from-fav-btn" data-ingredient-id="${e}">
              <svg
                class="fav-ingredients-icon-trash"
                width="18px"
                height="18px"
                aria-label="Remove favorite ingredient"
                >
                  <use href="${d}#icon-trash"></use>
              </svg>
            </button>
          </div>
        </li>`,f=async e=>{await c(e).then(t=>a=t)},h=async e=>{if(e.length){await f(e),console.log(a);let n=`<ul class="fav-ingredients-list">${a.map(i=>p(i)).join("")}</ul>`;s.innerHTML=n}else s.innerHTML=v};h(l);
