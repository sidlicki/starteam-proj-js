import{f as d,n as s,a as n,s as v}from"./coctail-e7ab091e.js";import{n as p,a as u,o as m,b as f}from"./coctail@2x-3a14991e.js";const c=document.querySelector(".fav-cocktail-list"),i=document.querySelector(".not-found");document.addEventListener("DOMContentLoaded",l);function r(){document.querySelectorAll(".remove-favorite").forEach(e=>{e.addEventListener("click",()=>{const a=e.id;f(a),l()})})}const k=(t,e)=>{const a=t.map(o=>`<li class="cocktail-list-favorite">
            <img class="cocktail-item-img-favorite" src="${o.drinkThumb}" onerror="this.src='${n}'" alt="preview cocktail" width="307" height="auto">
            <div class="trk">
            <h2 class="cocktail-name-favorite">${o.drink.slice(0,25)}</h2>
            <p class="description-container-favorite">${o.description.slice(0,111)+" . . ."}</p>
            <div class="button-wrap-favorite" >
                <button type="button" data-action="learnmore" class="learn-more-favorite" id="${o._id}">LEARN MORE</button>
                <button type="button" class="remove-favorite" id="${o._id}">
                    <svg class="svg-icon-favorite-trash" width="18" height="18">
                        <use href="${v}#icon-trash"></use>
                    </svg>
                </button>
            </div>
            </div>
        </li>`).join("");e.innerHTML=a,r()};async function l(){const t=JSON.parse(localStorage.getItem("favoriteCocktails"))||[];if(t.length>0){i.classList.add("is-hidden");const e=await d(t.map(a=>a));k(e,c)}else i.classList.remove("is-hidden"),i.innerHTML=`
            <picture>
                <!-- TABLET -->
                <source srcset="${p} 1x, ${u} 2x" type="image/webp" media="(min-width: 768px)">
                <!-- MOBILE -->
                <source srcset="${s} 1x, ${n} 2x" type="image/webp" media="(min-width: 320px)">
                <img class="no-fav-cocktail-img" src="${s}" alt="cocktail">
            </picture>
            <p class="no-fav-cocktail-text">
                You haven't added any
                <span class="no-fav-cocktail-color">favorite cocktails</span> yet
            </p>
        `,i.style.display="block",c.innerHTML="";r()}c.addEventListener("click",function(t){const e=t.target.id;switch(t.target.dataset.action){case"learnmore":m(e);break}});
