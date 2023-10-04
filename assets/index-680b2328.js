import{a as l,s as b,c as y,n as s,d,e as v,o as L,g as k,b as S}from"./add-remove-favorite-e397248f.js";import{p as o,n as C,a as E,g as $}from"./coctail@2x-2fd3f1ce.js";function q(e){return e.map(({description:t,drink:a,drinkThumb:n,_id:r})=>`
    <li class="cocktail-card">
            <img class="cocktail-image" src="${n}" onerror="this.src='${l}'" alt="${a}" loading="lazy" width="307" height="257"/>
            <h3 class="cocktail-name">${a.slice(0,25)}</h3>
            <p class="cocktail-info">${t.slice(0,115)+"..."}</p>
            <div class="btns-info">
                <button type="button" data-action="learnmore" class="js-learn-more learn-more-button" id="${r}">Learn more</button>
                <button type="button" data-action="addtofav" class="js-add-to add-to-button" aria-label="button like" id="${r}">
                    <svg class="icon-heart" width="18px" height="18px">
                        <use href="${b}#icon-heart"></use>
                    </svg>
                </button>
            </div>
        </li>
    `).join("")}const c=document.querySelector(".search-input"),x=document.querySelector(".cocktails-list"),i=`
          <div>
            <picture>
                <!-- TABLET -->
                <source srcset="${C} 1x, ${E} 2x" type="image/webp" media="(min-width: 768px)">
                <!-- MOBILE -->
                <source srcset="${s} 1x, ${l} 2x" type="image/webp" media="(min-width: 320px)">
                <img class="no-fav-cocktail-img" src="${s}" alt="cocktail">
            </picture>
            <p class="no-fav-cocktail-text">
            Sorry, we <span class="no-fav-cocktail-color">didn’t find</span> any cocktail for you
                
            </p>
          </div>
        `;c.addEventListener("keyup",T);function T(e){if(e.preventDefault(),e.key==="Enter"){const t=c.value.trim();c.value="",t&&y(t).then(a=>{a&&a.length>0?(document.querySelector(".tui-pagination").classList.remove("visually-hidden"),o(a,"byName","cocktails-list")):(x.innerHTML=i,document.querySelector(".tui-pagination").classList.add("visually-hidden"))}).catch(a=>{console.error("Error fetching cocktails:",a)})}}const A=document.querySelector(".js-search-menu"),u=document.querySelector(".cocktails-list"),M=document.querySelector(".js-search-mobile");A.addEventListener("click",j);function j(e){let t=e.target.textContent;d(t).then(a=>{a&&a.length>0?(document.querySelector(".tui-pagination").classList.remove("visually-hidden"),o(a,"byAbc","cocktails-list")):(document.querySelector(".tui-pagination").classList.add("visually-hidden"),u.innerHTML=i)}).catch(a=>{console.error("Error fetching cocktails:",a)})}M.addEventListener("change",I);function I(e){let a=e.target.options[e.target.selectedIndex].value;d(a).then(n=>{n&&n.length>0?(document.querySelector(".tui-pagination").classList.remove("visually-hidden"),o(n,"byAbc","cocktails-list")):(u.innerHTML=i,document.querySelector(".tui-pagination").classList.add("visually-hidden"))}).catch(n=>{console.error("Error fetching cocktails:",n)})}const m={formSelect:document.querySelector(".js-search-mobile"),searchList:document.querySelector(".js-search-menu")},h=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"];let p=[];function B(e){p=e.map(t=>`<option class="search-select-one" value="${t}">${t}</option>`).join("")}B(h);m.formSelect.insertAdjacentHTML("beforeend",p);let g=[];function w(e){g=e.map(t=>`<li class="search-menu-item">${t}</li>`).join("")}w(h);m.searchList.insertAdjacentHTML("beforeend",g);const f=document.querySelector(".cocktails-list");let H=$();v(H).then(e=>{f.innerHTML=q(e)});f.addEventListener("click",function(e){const t=e.target.id;switch(e.target.dataset.action){case"addtofav":console.log("Add to Favorite, ID",t);const a=e.target.children[0].classList;a.value=="icon-heart"?(a.replace("icon-heart","icon-heart-addtofavorite"),k(t)):(a.replace("icon-heart-addtofavorite","icon-heart"),S(t));break;case"learnmore":L(t);break}});document.body.addEventListener("click",R);function R(e){if(e.target.name==="add-cocktail"&&e.target.nodeName==="BUTTON"){let t=e.target.id;console.log(t),N(t)}}function N(e){document.getElementById(e).nextElementSibling.firstElementChild.classList.replace("icon-heart","icon-heart-addtofavorite")}document.body.addEventListener("click",O);function O(e){if(e.target.name==="remove-cocktail"&&e.target.nodeName==="BUTTON"){let t=e.target.id;W(t)}}function W(e){document.getElementById(e).nextElementSibling.firstElementChild.classList.replace("icon-heart-addtofavorite","icon-heart")}
