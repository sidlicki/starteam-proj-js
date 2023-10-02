import{a as u,s as g,d as y,e as k,n as l,g as h}from"./coctail-fb19d49b.js";import{o as v,c as $,b as S,f as C,n as M,a as T}from"./coctail@2x-e2b59ee4.js";function r(e){return e.map(({description:a,drink:t,drinkThumb:n,_id:c})=>`
    <li class="cocktail-card" id="${c}">
            <img class="cocktail-image" src="${n}" onerror="this.src='${u}'" alt="${t}" loading="lazy" width="307" height="257"/>
            <h3 class="cocktail-name">${t.slice(0,25)}</h3>
            <p class="cocktail-info">${a.slice(0,115)+"..."}</p>
            <div class="btns-info">
                <button type="button" data-action="learnmore" class="js-learn-more learn-more-button" id="${c}">Learn more</button>
                <button type="button" data-action="addtofav" class="js-add-to add-to-button" id="${c}">
                    <svg class="icon-heart" width="18px" height="18px">
                        <use href="${g}#icon-heart"></use>
                    </svg>
                </button>
            </div>
        </li>
    `).join("")}function x(){return window.innerWidth>1280?"9":"8"}const p=document.querySelector(".cocktails-list");let j=x();y(j).then(e=>{p.innerHTML=r(e)});p.addEventListener("click",function(e){const a=e.target.id;switch(console.log(e),e.target.dataset.action){case"addtofav":console.log("Add to Favorite, ID",a);const t=e.target.children[0].classList;t.value=="icon-heart"?(t.replace("icon-heart","icon-heart-addtofavorite"),$(a)):(t.replace("icon-heart-addtofavorite","icon-heart"),S(a)),console.log(C);break;case"learnmore":console.log("Learn More, ID",a),v(a);break}});const i=document.querySelector(".search-input"),d=document.querySelector(".cocktails-list"),s=`
          <div>
            <picture>
                <!-- TABLET -->
                <source srcset="${M} 1x, ${T} 2x" type="image/webp" media="(min-width: 768px)">
                <!-- MOBILE -->
                <source srcset="${l} 1x, ${u} 2x" type="image/webp" media="(min-width: 320px)">
                <img class="no-fav-cocktail-img" src="${l}" alt="cocktail">
            </picture>
            <p class="no-fav-cocktail-text">
            Sorry, we <span class="no-fav-cocktail-color">didn’t find</span> any cocktail for you
                
            </p>
          </div>
        `;i.addEventListener("keyup",E);function E(e){if(e.preventDefault(),e.key==="Enter"){const a=i.value.trim();i.value="",a&&k(a).then(t=>{t&&t.length>0?d.innerHTML=r(t):d.innerHTML=s}).catch(t=>{console.error("Error fetching cocktails:",t)})}}const H=document.querySelector(".js-search-menu"),o=document.querySelector(".cocktails-list"),w=document.querySelector(".js-search-mobile");H.addEventListener("click",q);function q(e){let a=e.target.textContent;h(a).then(t=>{t&&t.length>0?o.innerHTML=r(t):o.innerHTML=s}).catch(t=>{console.error("Error fetching cocktails:",t)})}w.addEventListener("change",W);function W(e){let t=e.target.options[e.target.selectedIndex].value;h(t).then(n=>{n&&n.length>0?o.innerHTML=r(n):o.innerHTML=s}).catch(n=>{console.error("Error fetching cocktails:",n)})}const m={formSelect:document.querySelector(".js-search-mobile"),searchList:document.querySelector(".js-search-menu")},f=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"];let L=[];function A(e){L=e.map(a=>`<option class="search-select-one" value="${a}">${a}</option>`).join("")}A(f);m.formSelect.insertAdjacentHTML("beforeend",L);let b=[];function I(e){b=e.map(a=>`<li class="search-menu-item">${a}</li>`).join("")}I(f);m.searchList.insertAdjacentHTML("beforeend",b);
