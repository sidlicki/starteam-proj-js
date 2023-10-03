import{f as d,n,a as r,o as v,b as m,s as u}from"./add-remove-favorite-555a27cd.js";import{n as p,a as k}from"./coctail@2x-d8dacd4c.js";const c=document.querySelector(".fav-cocktail-list"),i=document.querySelector(".not-found");document.addEventListener("DOMContentLoaded",s);function l(){document.querySelectorAll(".remove-favorite").forEach(e=>{e.addEventListener("click",()=>{const a=e.id;m(a),s()})})}const f=(t,e)=>{const a=t.map(o=>`<li class="cocktail-list-favorite">
            <img class="cocktail-item-img-favorite" src="${o.drinkThumb}" onerror="this.src='${r}'" alt="preview cocktail" width="307" height="auto">
            <div class="trk">
            <h2 class="cocktail-name-favorite">${o.drink.slice(0,25)}</h2>
            <p class="description-container-favorite">${o.description.slice(0,111)+" . . ."}</p>
            <div class="button-wrap-favorite" >
                <button type="button" data-action="learnmore" class="learn-more-favorite" id="${o._id}">LEARN MORE</button>
                <button type="button" class="remove-favorite" id="${o._id}">
                    <svg class="svg-icon-favorite-trash" width="18" height="18">
                        <use href="${u}#icon-trash"></use>
                    </svg>
                </button>
            </div>
            </div>
        </li>`).join("");e.innerHTML=a,l()};async function s(){const t=JSON.parse(localStorage.getItem("favoriteCocktails"))||[];if(t.length>0){i.classList.add("is-hidden");const e=await d(t.map(a=>a));f(e,c),i.innerHTML=""}else i.classList.remove("is-hidden"),i.innerHTML=`
            <picture>
                <!-- TABLET -->
                <source srcset="${p} 1x, ${k} 2x" type="image/webp" media="(min-width: 768px)">
                <!-- MOBILE -->
                <source srcset="${n} 1x, ${r} 2x" type="image/webp" media="(min-width: 320px)">
                <img class="no-fav-cocktail-img" src="${n}" alt="cocktail">
            </picture>
            <p class="no-fav-cocktail-text">
                You haven't added any
                <span class="no-fav-cocktail-color">favorite cocktails</span> yet
            </p>
        `,c.innerHTML="";l()}c.addEventListener("click",function(t){const e=t.target.id;switch(t.target.dataset.action){case"learnmore":v(e);break}});document.body.addEventListener("click",t=>{(t.target.name==="remove-cocktail"||t.target.name==="add-cocktail")&&s()});
