import"./pagination-cc934069.js";import{f as c,s}from"./sprite-71a01015.js";document.addEventListener("DOMContentLoaded",n);const l=(a,e)=>{const i=a.map(t=>`<li class="cocktail-list-favorite">
            <img class="cocktail-item-img-favorite" src="${t.drinkThumb}" alt="preview cocktail" width="307" height="auto">
            <div class="trk">
            <h2 class="cocktail-name-favorite">${t.drink}</h2>
            <p class="description-container-favorite">${t.description}</p>
            <div class="button-wrap-favorite" data-id-drink='${t._id}'>
                <button type="button" class="learn-more-favorite">LEARN MORE</button>
                <button type="button" class="remove-favorite">
                    <svg class="svg-icon-favorite-trash" width="18" height="18">
                        <use href="${s}#icon-trash"></use>
                    </svg>
                </button>
            </div>
            </div>
        </li>`).join("");e.insertAdjacentHTML("beforeend",i)};async function n(){const a=document.querySelector(".fav-cocktail-list"),e=document.querySelector(".not-found"),i=JSON.parse(localStorage.getItem("favoriteList"))||[];if(console.log(i),i.length>0){e.classList.add("is-hidden"),console.log(i.length);const t=await c(i.map(o=>o));console.log(t),l(t,a)}else e.classList.remove("is-hidden"),e.innerHTML=`
            <picture>
                <!-- DESKTOP -->
                <source srcset="/img/tablet/coctail.webp 1x, /img/tablet/coctail@2x.webp 2x" type="image/webp" media="(min-width: 1280px)">
                <!-- TABLET -->
                <source srcset="/img/tablet/coctail.webp 1x, /img/tablet/coctail@2x.webp 2x" type="image/webp" media="(min-width: 768px)">
                <!-- MOBILE -->
                <source srcset="/img/mobile/coctail.webp 1x, /img/mobile/coctail@2x.webp 2x" type="image/webp" media="(min-width: 320px)">
                <img class="no-fav-cocktail-img" src="/img/tablet/coctail.webp" alt="cocktail">
            </picture>
            <p class="no-fav-cocktail-text">
                You haven't added any
                <span class="no-fav-cocktail-color">favorite cocktails</span> yet
            </p>
        `,e.style.display="block",a.innerHTML=""}
