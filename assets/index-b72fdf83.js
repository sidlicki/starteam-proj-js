import{P as j,a as g,s as y,c as w,o as A,d as E,b as N,e as H,g as I,n as L,h as k}from"./add-remove-favorite-24312c39.js";import{n as O,a as W}from"./coctail@2x-d8dacd4c.js";function P(e,o){let t=9,r=3;const s=document.getElementById("tui-pagination-container");new j(s,{totalItems:e.length,itemsPerPage:t,visiblePages:r}).getCurrentPage();const l=()=>{let n=[],a=t,c=0;for(let i=0;i<Math.ceil(e.length/t);i++){for(n.push([]),c;c<a&&e[c]!==void 0;c++)n[i].push(e[c]);a+=t}return n};console.log(l());const u=n=>{console.log(n),console.log(l()[n]),console.log("");const a=l()[n].map(c=>{const{_id:i,drink:b,drinkThumb:T,description:q}=c;return`
              <li class="cocktail-card" id="${i}">
                      <img class="cocktail-image" src="${T}" onerror="this.src='${g}'" alt="${b}" loading="lazy" width="307" height="257"/>
                      <h3 class="cocktail-name">${b.slice(0,25)}</h3>
                      <p class="cocktail-info">${q.slice(0,115)+"..."}</p>
                      <div class="btns-info">
                          <button type="button" data-action="learnmore" class="js-learn-more learn-more-button" id="${i}">Learn more</button>
                          <button type="button" data-action="addtofav" class="js-add-to add-to-button" id="${i}">
                              <svg class="icon-heart" width="18px" height="18px">
                                  <use href="${y}#icon-heart"></use>
                              </svg>
                          </button>
                      </div>
                  </li>
              `}).join("");document.querySelector(".cocktails-list").innerHTML=a};u(0);const f=()=>{Array.from(document.querySelectorAll(".tui-page-btn")).forEach(a=>{Number.isInteger(Number(a.textContent))&&a.classList.add("tui-number-item")})};f();function M(n){if(f(),n.target===n.currentTarget){console.log("out button");return}(n.target.classList.contains("tui-prev")||n.target.classList.contains("tui-ico-prev"))&&(console.log("1"),console.log(l()[Number(document.querySelector(".tui-is-selected").textContent)-1]),u(Number(document.querySelector(".tui-is-selected").textContent)-1)),(n.target.classList.contains("tui-next")||n.target.classList.contains("tui-ico-next")&&n.target.classList.contains("tui-is-disabled")===!1)&&(console.log("2"),console.log(l()[Number(document.querySelector(".tui-is-selected").textContent)-1]),u(Number(document.querySelector(".tui-is-selected").textContent)-1)),n.target.classList.contains("tui-number-item")&&(console.log(Number(n.target.textContent)-1),console.log(l()[Number(n.target.textContent)-1]),u(Number(n.target.textContent)))}s.addEventListener("click",M)}function m(e){return e.map(({description:o,drink:t,drinkThumb:r,_id:s})=>`
    <li class="cocktail-card" id="${s}">
            <img class="cocktail-image" src="${r}" onerror="this.src='${g}'" alt="${t}" loading="lazy" width="307" height="257"/>
            <h3 class="cocktail-name">${t.slice(0,25)}</h3>
            <p class="cocktail-info">${o.slice(0,115)+"..."}</p>
            <div class="btns-info">
                <button type="button" data-action="learnmore" class="js-learn-more learn-more-button" id="${s}">Learn more</button>
                <button type="button" data-action="addtofav" class="js-add-to add-to-button" id="${s}">
                    <svg class="icon-heart" width="18px" height="18px">
                        <use href="${y}#icon-heart"></use>
                    </svg>
                </button>
            </div>
        </li>
    `).join("")}function B(){return window.innerWidth>1280?"9":"8"}const v=document.querySelector(".cocktails-list");let F=B();w(F).then(e=>{v.innerHTML=m(e)});v.addEventListener("click",function(e){const o=e.target.id;switch(console.log(e),e.target.dataset.action){case"addtofav":console.log("Add to Favorite, ID",o);const t=e.target.children[0].classList;t.value=="icon-heart"?(t.replace("icon-heart","icon-heart-addtofavorite"),E(o)):(t.replace("icon-heart-addtofavorite","icon-heart"),N(o)),console.log(H);break;case"learnmore":console.log("Learn More, ID",o),A(o);break}});const h=document.querySelector(".search-input"),D=document.querySelector(".cocktails-list"),p=`
          <div>
            <picture>
                <!-- TABLET -->
                <source srcset="${O} 1x, ${W} 2x" type="image/webp" media="(min-width: 768px)">
                <!-- MOBILE -->
                <source srcset="${L} 1x, ${g} 2x" type="image/webp" media="(min-width: 320px)">
                <img class="no-fav-cocktail-img" src="${L}" alt="cocktail">
            </picture>
            <p class="no-fav-cocktail-text">
            Sorry, we <span class="no-fav-cocktail-color">didn’t find</span> any cocktail for you
                
            </p>
          </div>
        `;h.addEventListener("keyup",R);function R(e){if(e.preventDefault(),e.key==="Enter"){const o=h.value.trim();h.value="",o&&I(o).then(t=>{t&&t.length>0?(console.log(m(t)),P(t)):(D.innerHTML=p,document.querySelector(".tui-pagination").innerHTML="")}).catch(t=>{console.error("Error fetching cocktails:",t)})}}const V=document.querySelector(".js-search-menu"),d=document.querySelector(".cocktails-list"),z=document.querySelector(".js-search-mobile");V.addEventListener("click",J);function J(e){let o=e.target.textContent;k(o).then(t=>{t&&t.length>0?d.innerHTML=m(t):d.innerHTML=p}).catch(t=>{console.error("Error fetching cocktails:",t)})}z.addEventListener("change",U);function U(e){let t=e.target.options[e.target.selectedIndex].value;k(t).then(r=>{r&&r.length>0?d.innerHTML=m(r):d.innerHTML=p}).catch(r=>{console.error("Error fetching cocktails:",r)})}const $={formSelect:document.querySelector(".js-search-mobile"),searchList:document.querySelector(".js-search-menu")},C=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"];let x=[];function G(e){x=e.map(o=>`<option class="search-select-one" value="${o}">${o}</option>`).join("")}G(C);$.formSelect.insertAdjacentHTML("beforeend",x);let S=[];function K(e){S=e.map(o=>`<li class="search-menu-item">${o}</li>`).join("")}K(C);$.searchList.insertAdjacentHTML("beforeend",S);
