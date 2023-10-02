import{n as s,a as g,s as l,b as v}from"./coctail@2x-78857b83.js";const a="favoriteIngredients";let r=[],n=[];const f=document.querySelector(".fav-ingredients-container"),p=e=>(e=e.toLowerCase(),e==="yes"?"Alcoholic":e==="no"?"Non-Alcoholic":"NA"),m=`
  <div class="no-fav-ingredients-wrapper">
    <img
      class="cocktail-photo-placeholder"
      srcset="${s} 1x, ${g} 2x"
      src="${s}"
      alt="Favorite Cocktail Image Placeholder"
      width="142"
      height="122"
    />
    <p class="no-fav-ingredients-text">
      You haven't added any
      <span class="no-fav-ingredients-text-accent"> favorite ingredients </span>yet
    </p>
  </div>
  `,I=({_id:e,title:i,alcohol:t,description:c})=>`
        <li class="fav-ingredients-list-item" data-ingredient-id="${e}">
          <h2 class="fav-ingredient-title">${i||"No title"}</h2>
          <p class="fav-ingredient-alcohol">${p(t)}</p>
          <p class="fav-ingredient-description">${c||"No description"}</p>
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
                    <use href="${l}#icon-trash"></use>
                </svg>
            </button>
          </div>
        </li>`;n=JSON.parse(localStorage.getItem(a)||"[]");const u=e=>{if(e.target.nodeName!=="BUTTON"||e.target.dataset.action!=="igredient-remove-from-favorite")return;const i=e.target.closest(".fav-ingredients-list-item").dataset.ingredientId;n=n.filter(t=>t!==i),localStorage.setItem(a,JSON.stringify(n)),r=r.filter(t=>t._id!==i),d()};f.addEventListener("click",u);const o=document.querySelector(".fav-ingredients-container"),h=async e=>{r=await v(e)},d=()=>{if(n.length){const i=`<ul class="fav-ingredients-list">${r.map(t=>I(t)).join("")}</ul>`;o.innerHTML=i}else o.innerHTML=m},b=async()=>{n=JSON.parse(localStorage.getItem(a))||[],await h(n),d()};b();
