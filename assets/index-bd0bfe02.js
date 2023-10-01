import{a as u,s as b,c as y,d as $,n as l,e as h}from"./coctail@2x-78857b83.js";import{n as k,a as S}from"./coctail@2x-e6b0ddc1.js";function c(e){return e.map(({description:n,drink:t,drinkThumb:r,_id:o})=>`
    <li class="cocktail-card" id="${o}">
            <img class="cocktail-image" src="${r}" onerror="this.src='${u}'" alt="${t}" loading="lazy" width="307" height="257"/>
            <h3 class="cocktail-name">${t.slice(0,25)}</h3>
            <p class="cocktail-info">${n.slice(0,115)+"..."}</p>
            <div class="btns-info">
                <button type="button" data-action="learnmore" class="js-learn-more learn-more-button" id="${o}">Learn more</button>
                <button type="button" data-action="addtofav" class="js-add-to add-to-button" id="${o}">
                    <svg class="icon-heart" width="18px" height="18px">
                        <use href="${b}#icon-heart"></use>
                    </svg>
                </button>
            </div>
        </li>
    `).join("")}function v(){return window.innerWidth>1280?"9":"8"}const p=document.querySelector(".cocktails-list");let M=v();y(M).then(e=>{p.innerHTML=c(e)});p.addEventListener("click",function(e){if(e.target.dataset.action=="addtofav"&&console.log("Add to Favorite, ID",e.target.id),e.target.dataset.action=="learnmore"){let n=e.target.id;console.log("Learn More, ID",n)}});const i=document.querySelector(".search-input"),d=document.querySelector(".cocktails-list"),s=`
          <div>
            <picture>
                <!-- TABLET -->
                <source srcset="${k} 1x, ${S} 2x" type="image/webp" media="(min-width: 768px)">
                <!-- MOBILE -->
                <source srcset="${l} 1x, ${u} 2x" type="image/webp" media="(min-width: 320px)">
                <img class="no-fav-cocktail-img" src="${l}" alt="cocktail">
            </picture>
            <p class="no-fav-cocktail-text">
            Sorry, we <span class="no-fav-cocktail-color">didn’t find</span> any cocktail for you
                
            </p>
          </div>
        `;i.addEventListener("keyup",T);function T(e){if(e.preventDefault(),e.key==="Enter"){const n=i.value.trim();i.value="",n&&$(n).then(t=>{t&&t.length>0?d.innerHTML=c(t):d.innerHTML=s}).catch(t=>{console.error("Error fetching cocktails:",t)})}}const x=document.querySelector(".js-search-menu"),a=document.querySelector(".cocktails-list"),j=document.querySelector(".js-search-mobile");x.addEventListener("click",C);function C(e){let n=e.target.textContent;h(n).then(t=>{t&&t.length>0?a.innerHTML=c(t):a.innerHTML=s}).catch(t=>{console.error("Error fetching cocktails:",t)})}j.addEventListener("change",E);function E(e){let t=e.target.options[e.target.selectedIndex].value;h(t).then(r=>{r&&r.length>0?a.innerHTML=c(r):a.innerHTML=s}).catch(r=>{console.error("Error fetching cocktails:",r)})}const m={formSelect:document.querySelector(".js-search-mobile"),searchList:document.querySelector(".js-search-menu")},f=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"];let L=[];function H(e){L=e.map(n=>`<option class="search-select-one" value="${n}">${n}</option>`).join("")}H(f);m.formSelect.insertAdjacentHTML("beforeend",L);let g=[];function q(e){g=e.map(n=>`<li class="search-menu-item">${n}</li>`).join("")}q(f);m.searchList.insertAdjacentHTML("beforeend",g);
