import"./mobile-menu-13b48881.js";import{f as c,n,a as l,b as i,c as r,s as d}from"./coctail@2x-d987669b.js";document.addEventListener("DOMContentLoaded",v);const p=(e,o)=>{const a=e.map(t=>`<li class="cocktail-list-favorite">
            <img class="cocktail-item-img-favorite" src="${t.drinkThumb}" alt="preview cocktail" width="307" height="auto">
            <div class="trk">
            <h2 class="cocktail-name-favorite">${t.drink}</h2>
            <p class="description-container-favorite">${t.description.slice(0,111)+"..."}</p>
            <div class="button-wrap-favorite" >
                <button type="button" class="learn-more-favorite" id="${t._id}">LEARN MORE</button>
                <button type="button" class="remove-favorite" id="${t._id}">
                    <svg class="svg-icon-favorite-trash" width="18" height="18">
                        <use href="${d}#icon-trash"></use>
                    </svg>
                </button>
            </div>
            </div>
        </li>`).join("");o.insertAdjacentHTML("beforeend",a)};async function v(){const e=document.querySelector(".fav-cocktail-list"),o=document.querySelector(".not-found"),a=JSON.parse(localStorage.getItem("favoriteCocktails"))||[];if(console.log(a),a.length>0){o.classList.add("is-hidden"),console.log(a.length);const t=await c(a.map(s=>s));console.log(t),p(t,e)}else o.classList.remove("is-hidden"),o.innerHTML=`
            <picture>
                <!-- TABLET -->
                <source srcset="${n} 1x, ${l} 2x" type="image/webp" media="(min-width: 768px)">
                <!-- MOBILE -->
                <source srcset="${i} 1x, ${r} 2x" type="image/webp" media="(min-width: 320px)">
                <img class="no-fav-cocktail-img" src="${i}" alt="cocktail">
            </picture>
            <p class="no-fav-cocktail-text">
                You haven't added any
                <span class="no-fav-cocktail-color">favorite cocktails</span> yet
            </p>
        `,o.style.display="block",e.innerHTML=""}
