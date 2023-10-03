import{P as A,a as m,s as k,c as E,o as H,d as I,b as N,e as O,g as P,n as y,h as v}from"./add-remove-favorite-0021d48c.js";import{n as W,a as B}from"./coctail@2x-d8dacd4c.js";function $(){const e=window.innerWidth;return Number(e>1280?"9":"8")}function p(e,n){let t=$(),a=3;const s=document.getElementById("tui-pagination-container");new A(s,{totalItems:e.length,itemsPerPage:t,visiblePages:a}).getCurrentPage();const u=()=>{let o=[],r=t,c=0;for(let i=0;i<Math.ceil(e.length/t);i++){for(o.push([]),c;c<r&&e[c]!==void 0;c++)o[i].push(e[c]);r+=t}return o};console.log(u());const l=o=>{console.log(o),console.log(u()[o]),console.log("");const r=u()[o].map(c=>{const{_id:i,drink:L,drinkThumb:j,description:w}=c;return`
              <li class="cocktail-card" id="${i}">
                      <img class="cocktail-image" src="${j}" onerror="this.src='${m}'" alt="${L}" loading="lazy" width="307" height="257"/>
                      <h3 class="cocktail-name">${L.slice(0,25)}</h3>
                      <p class="cocktail-info">${w.slice(0,115)+"..."}</p>
                      <div class="btns-info">
                          <button type="button" data-action="learnmore" class="js-learn-more learn-more-button" id="${i}">Learn more</button>
                          <button type="button" data-action="addtofav" class="js-add-to add-to-button" id="${i}">
                              <svg class="icon-heart" width="18px" height="18px">
                                  <use href="${k}#icon-heart"></use>
                              </svg>
                          </button>
                      </div>
                  </li>
              `}).join("");document.querySelector(".cocktails-list").innerHTML=r};l(0);const b=()=>{Array.from(document.querySelectorAll(".tui-page-btn")).forEach(r=>{Number.isInteger(Number(r.textContent))&&r.classList.add("tui-number-item")})};b();function q(o){if(b(),o.target===o.currentTarget){console.log("out button");return}(o.target.classList.contains("tui-prev")||o.target.classList.contains("tui-ico-prev"))&&l(Number(document.querySelector(".tui-is-selected").textContent)-1),(o.target.classList.contains("tui-next")||o.target.classList.contains("tui-ico-next")&&o.target.classList.contains("tui-is-disabled")===!1)&&l(Number(document.querySelector(".tui-is-selected").textContent)-1),o.target.classList.contains("tui-number-item")&&l(Number(o.target.textContent)-1)}s.addEventListener("click",q)}function g(e){return e.map(({description:n,drink:t,drinkThumb:a,_id:s})=>`
    <li class="cocktail-card" id="${s}">
            <img class="cocktail-image" src="${a}" onerror="this.src='${m}'" alt="${t}" loading="lazy" width="307" height="257"/>
            <h3 class="cocktail-name">${t.slice(0,25)}</h3>
            <p class="cocktail-info">${n.slice(0,115)+"..."}</p>
            <div class="btns-info">
                <button type="button" data-action="learnmore" class="js-learn-more learn-more-button" id="${s}">Learn more</button>
                <button type="button" data-action="addtofav" class="js-add-to add-to-button" id="${s}">
                    <svg class="icon-heart" width="18px" height="18px">
                        <use href="${k}#icon-heart"></use>
                    </svg>
                </button>
            </div>
        </li>
    `).join("")}const S=document.querySelector(".cocktails-list");let F=$();E(F).then(e=>{S.innerHTML=g(e)});S.addEventListener("click",function(e){const n=e.target.id;switch(console.log(e),e.target.dataset.action){case"addtofav":console.log("Add to Favorite, ID",n);const t=e.target.children[0].classList;t.value=="icon-heart"?(t.replace("icon-heart","icon-heart-addtofavorite"),I(n)):(t.replace("icon-heart-addtofavorite","icon-heart"),N(n)),console.log(O);break;case"learnmore":console.log("Learn More, ID",n),H(n);break}});const d=document.querySelector(".search-input"),D=document.querySelector(".cocktails-list"),f=`
          <div>
            <picture>
                <!-- TABLET -->
                <source srcset="${W} 1x, ${B} 2x" type="image/webp" media="(min-width: 768px)">
                <!-- MOBILE -->
                <source srcset="${y} 1x, ${m} 2x" type="image/webp" media="(min-width: 320px)">
                <img class="no-fav-cocktail-img" src="${y}" alt="cocktail">
            </picture>
            <p class="no-fav-cocktail-text">
            Sorry, we <span class="no-fav-cocktail-color">didn’t find</span> any cocktail for you
                
            </p>
          </div>
        `;d.addEventListener("keyup",R);function R(e){if(e.preventDefault(),e.key==="Enter"){const n=d.value.trim();d.value="",n&&P(n).then(t=>{t&&t.length>0?(console.log(g(t)),p(t)):(D.innerHTML=f,document.querySelector(".tui-pagination").innerHTML="")}).catch(t=>{console.error("Error fetching cocktails:",t)})}}const V=document.querySelector(".js-search-menu"),h=document.querySelector(".cocktails-list"),z=document.querySelector(".js-search-mobile");V.addEventListener("click",J);function J(e){let n=e.target.textContent;v(n).then(t=>{t&&t.length>0?(console.log(t),p(t)):h.innerHTML=f}).catch(t=>{console.error("Error fetching cocktails:",t),document.querySelector(".tui-pagination").innerHTML=""})}z.addEventListener("change",U);function U(e){let t=e.target.options[e.target.selectedIndex].value;v(t).then(a=>{a&&a.length>0?(h.innerHTML=g(a),p(a)):(h.innerHTML=f,document.querySelector(".tui-pagination").innerHTML="")}).catch(a=>{console.error("Error fetching cocktails:",a)})}const C={formSelect:document.querySelector(".js-search-mobile"),searchList:document.querySelector(".js-search-menu")},x=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"];let M=[];function G(e){M=e.map(n=>`<option class="search-select-one" value="${n}">${n}</option>`).join("")}G(x);C.formSelect.insertAdjacentHTML("beforeend",M);let T=[];function K(e){T=e.map(n=>`<li class="search-menu-item">${n}</li>`).join("")}K(x);C.searchList.insertAdjacentHTML("beforeend",T);
