import{a as d,s as L,c as y,o as k,d as v,b as S,e as $,g as M,n as l,h as u}from"./add-remove-favorite-8672643f.js";import{g as C,p as i,n as T,a as x}from"./coctail@2x-96fcd54f.js";function h(t){return t.map(({description:a,drink:e,drinkThumb:o,_id:n})=>`
    <li class="cocktail-card" id="${n}">
            <img class="cocktail-image" src="${o}" onerror="this.src='${d}'" alt="${e}" loading="lazy" width="307" height="257"/>
            <h3 class="cocktail-name">${e.slice(0,25)}</h3>
            <p class="cocktail-info">${a.slice(0,115)+"..."}</p>
            <div class="btns-info">
                <button type="button" data-action="learnmore" class="js-learn-more learn-more-button" id="${n}">Learn more</button>
                <button type="button" data-action="addtofav" class="js-add-to add-to-button" id="${n}">
                    <svg class="icon-heart" width="18px" height="18px">
                        <use href="${L}#icon-heart"></use>
                    </svg>
                </button>
            </div>
        </li>
    `).join("")}const p=document.querySelector(".cocktails-list");let q=C();y(q).then(t=>{p.innerHTML=h(t)});p.addEventListener("click",function(t){const a=t.target.id;switch(console.log(t),t.target.dataset.action){case"addtofav":console.log("Add to Favorite, ID",a);const e=t.target.children[0].classList;e.value=="icon-heart"?(e.replace("icon-heart","icon-heart-addtofavorite"),v(a)):(e.replace("icon-heart-addtofavorite","icon-heart"),S(a)),console.log($);break;case"learnmore":console.log("Learn More, ID",a),k(a);break}});const c=document.querySelector(".search-input"),H=document.querySelector(".cocktails-list"),s=`
          <div>
            <picture>
                <!-- TABLET -->
                <source srcset="${T} 1x, ${x} 2x" type="image/webp" media="(min-width: 768px)">
                <!-- MOBILE -->
                <source srcset="${l} 1x, ${d} 2x" type="image/webp" media="(min-width: 320px)">
                <img class="no-fav-cocktail-img" src="${l}" alt="cocktail">
            </picture>
            <p class="no-fav-cocktail-text">
            Sorry, we <span class="no-fav-cocktail-color">didn’t find</span> any cocktail for you
                
            </p>
          </div>
        `;c.addEventListener("keyup",j);function j(t){if(t.preventDefault(),t.key==="Enter"){const a=c.value.trim();c.value="",a&&M(a).then(e=>{e&&e.length>0?i(e,"byName","cocktails-list"):(H.innerHTML=s,document.querySelector(".tui-pagination").innerHTML="")}).catch(e=>{console.error("Error fetching cocktails:",e)})}}const E=document.querySelector(".js-search-menu"),r=document.querySelector(".cocktails-list"),A=document.querySelector(".js-search-mobile");E.addEventListener("click",w);function w(t){let a=t.target.textContent;u(a).then(e=>{e&&e.length>0?(console.log(e),i(e,"byAbc","cocktails-list")):r.innerHTML=s}).catch(e=>{console.error("Error fetching cocktails:",e),document.querySelector(".tui-pagination").innerHTML=""})}A.addEventListener("change",I);function I(t){let e=t.target.options[t.target.selectedIndex].value;u(e).then(o=>{o&&o.length>0?(r.innerHTML=h(o),i(o,"byAbc","cocktails-list")):(r.innerHTML=s,document.querySelector(".tui-pagination").innerHTML="")}).catch(o=>{console.error("Error fetching cocktails:",o)})}const m={formSelect:document.querySelector(".js-search-mobile"),searchList:document.querySelector(".js-search-menu")},f=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"];let g=[];function B(t){g=t.map(a=>`<option class="search-select-one" value="${a}">${a}</option>`).join("")}B(f);m.formSelect.insertAdjacentHTML("beforeend",g);let b=[];function W(t){b=t.map(a=>`<li class="search-menu-item">${a}</li>`).join("")}W(f);m.searchList.insertAdjacentHTML("beforeend",b);
