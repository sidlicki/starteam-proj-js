import{a as u,s as g,d as y,e as k,n as l,g as h}from"./coctail-9f4942b8.js";import{o as v,c as $,f as S,n as M,a as C}from"./coctail@2x-d84f6a98.js";function c(e){return e.map(({description:t,drink:n,drinkThumb:r,_id:o})=>`
    <li class="cocktail-card" id="${o}">
            <img class="cocktail-image" src="${r}" onerror="this.src='${u}'" alt="${n}" loading="lazy" width="307" height="257"/>
            <h3 class="cocktail-name">${n.slice(0,25)}</h3>
            <p class="cocktail-info">${t.slice(0,115)+"..."}</p>
            <div class="btns-info">
                <button type="button" data-action="learnmore" class="js-learn-more learn-more-button" id="${o}">Learn more</button>
                <button type="button" data-action="addtofav" class="js-add-to add-to-button" id="${o}">
                    <svg class="icon-heart" width="18px" height="18px">
                        <use href="${g}#icon-heart"></use>
                    </svg>
                </button>
            </div>
        </li>
    `).join("")}function T(){return window.innerWidth>1280?"9":"8"}const p=document.querySelector(".cocktails-list");let x=T();y(x).then(e=>{p.innerHTML=c(e)});p.addEventListener("click",function(e){const t=e.target.id;switch(e.target.dataset.action){case"addtofav":console.log("Add to Favorite, ID",t),$(t),console.log(S);break;case"learnmore":v(t);break}});const s=document.querySelector(".search-input"),d=document.querySelector(".cocktails-list"),i=`
          <div>
            <picture>
                <!-- TABLET -->
                <source srcset="${M} 1x, ${C} 2x" type="image/webp" media="(min-width: 768px)">
                <!-- MOBILE -->
                <source srcset="${l} 1x, ${u} 2x" type="image/webp" media="(min-width: 320px)">
                <img class="no-fav-cocktail-img" src="${l}" alt="cocktail">
            </picture>
            <p class="no-fav-cocktail-text">
            Sorry, we <span class="no-fav-cocktail-color">didn’t find</span> any cocktail for you
                
            </p>
          </div>
        `;s.addEventListener("keyup",j);function j(e){if(e.preventDefault(),e.key==="Enter"){const t=s.value.trim();s.value="",t&&k(t).then(n=>{n&&n.length>0?d.innerHTML=c(n):d.innerHTML=i}).catch(n=>{console.error("Error fetching cocktails:",n)})}}const E=document.querySelector(".js-search-menu"),a=document.querySelector(".cocktails-list"),w=document.querySelector(".js-search-mobile");E.addEventListener("click",H);function H(e){let t=e.target.textContent;h(t).then(n=>{n&&n.length>0?a.innerHTML=c(n):a.innerHTML=i}).catch(n=>{console.error("Error fetching cocktails:",n)})}w.addEventListener("change",q);function q(e){let n=e.target.options[e.target.selectedIndex].value;h(n).then(r=>{r&&r.length>0?a.innerHTML=c(r):a.innerHTML=i}).catch(r=>{console.error("Error fetching cocktails:",r)})}const m={formSelect:document.querySelector(".js-search-mobile"),searchList:document.querySelector(".js-search-menu")},f=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"];let b=[];function W(e){b=e.map(t=>`<option class="search-select-one" value="${t}">${t}</option>`).join("")}W(f);m.formSelect.insertAdjacentHTML("beforeend",b);let L=[];function A(e){L=e.map(t=>`<li class="search-menu-item">${t}</li>`).join("")}A(f);m.searchList.insertAdjacentHTML("beforeend",L);
