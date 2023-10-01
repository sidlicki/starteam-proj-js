import{a as r}from"./modal-coctail-9f669a42.js";import{d as c,s}from"./coctail@2x-bfdaa116.js";function l(t){return t.map(({description:a,drink:o,drinkThumb:n,_id:e})=>`
    <li class="cocktail-card" id="${e}">
            <img class="cocktail-image" src="${n}" onerror="this.src='${c}'" alt="${o}" loading="lazy" width="307" height="257"/>
            <h3 class="cocktail-name">${o.slice(0,25)}</h3>
            <p class="cocktail-info">${a.slice(0,115)+"..."}</p>
            <div class="btns-info">
                <button type="button" data-action="learnmore" class="js-learn-more learn-more-button" id="${e}">Learn more</button>
                <button type="button" data-action="addtofav" class="js-add-to add-to-button" id="${e}">
                    <svg class="icon-heart" width="18px" height="18px">
                        <use href="${s}#icon-heart"></use>
                    </svg>
                </button>
            </div>
        </li>
    `).join("")}function d(){return window.innerWidth>1280?"9":"8"}const i=document.querySelector(".cocktails-list");let u=d();r(u).then(t=>{i.innerHTML=l(t)});i.addEventListener("click",function(t){if(t.target.dataset.action=="addtofav"&&console.log("Add to Favorite, ID",t.target.id),t.target.dataset.action=="learnmore"){let a=t.target.id;console.log("Learn More, ID",a)}});
