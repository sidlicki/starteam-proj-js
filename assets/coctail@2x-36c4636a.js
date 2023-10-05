import{P as w,c as u,g as L,a as y,s as m}from"./main-start-31672872.js";function j(n,d,$,x,o){let r=x===6?6:L(),N=3;n.length<=r&&document.querySelector(".tui-pagination").classList.add("visually-hidden");const g=document.getElementById("tui-pagination-container");new w(g,{totalItems:n.length,itemsPerPage:r,visiblePages:N}).getCurrentPage();let k=Array.from(document.querySelectorAll(".tui-page-btn"));Number.isInteger(o)===!0&&k.forEach(t=>{Number(t.textContent)===o&&t.click()});const s=()=>{let t=[],a=r,e=0;for(let i=0;i<Math.ceil(n.length/r);i++){for(t.push([]),e;e<a&&n[e]!==void 0;e++)t[i].push(n[e]);a+=r}return t};let c;const C=t=>(t=t.toLowerCase(),t==="yes"?"Alcoholic":t==="no"?"Non-Alcoholic":"NA"),l=t=>{const a=s()[t].map(e=>{const{_id:i,drink:b,drinkThumb:h,description:v}=e;return d==="byName"||d==="byAbc"?c=`
                <li class="cocktail-card">
                        <img class="cocktail-image" src="${h}" onerror="this.src='${y}'" alt="${b}" loading="lazy" width="307" height="257"/>
                        <h3 class="cocktail-name">${b.slice(0,25)}</h3>
                        <p class="cocktail-info">${v.slice(0,115)+"..."}</p>
                        <div class="btns-info">
                            <button type="button" data-action="learnmore" class="js-learn-more learn-more-button" id="${i}">Learn more</button>
                            <button type="button" data-action="addtofav" class="js-add-to add-to-button" id="${i}">
                                <svg class="icon-heart" width="18px" height="18px">
                                    <use href="${m}#icon-heart"></use>
                                </svg>
                            </button>
                        </div>
                    </li>
                `:d==="byfavoriteCoctails"?c=`<li class="cocktail-list-favorite">
                <img class="cocktail-item-img-favorite" src="${h}" onerror="this.src='${y}'" alt="preview cocktail" width="307" height="auto">
                <div class="trk">
                <h2 class="cocktail-name-favorite">${b.slice(0,25)}</h2>
                <p class="description-container-favorite">${v.slice(0,111)+" . . ."}</p>
                <div class="button-wrap-favorite" >
                    <button type="button" data-action="learnmore" class="learn-more-favorite" id="${i}">LEARN MORE</button>
                    <button type="button" class="remove-favorite" id="${i}">
                        <svg class="svg-icon-favorite-trash" width="18" height="18">
                            <use href="${m}#icon-trash"></use>
                        </svg>
                    </button>
                </div>
                </div>
            </li>`:c=`
                <li class="fav-ingredients-list-item" data-ingredient-id="${e._id}">
                  <h2 class="fav-ingredient-title">${e.title||"No title"}</h2>
                  <p class="fav-ingredient-alcohol">${C(e.alcohol)}</p>
                  <p class="fav-ingredient-description">${e.description||"No description"}</p>
                  <div class="fav-ingredients-buttons-wrapper">
                    <button
                      type="button"
                      class="fav-ingredients-learn-more-btn"
                      data-action="ingredient-learn-more">Learn more</button>
                    <button
                      type="button"
                      class="fav-ingredients-remove-from-fav-btn"
                      data-action="igredient-remove-from-favorite">
                        <svg
                          class="fav-ingredients-icon-trash"
                          width="18px"
                          height="18px"
                          aria-label="Remove favorite ingredient"
                          >
                            <use href="${m}#icon-trash"></use>
                        </svg>
                    </button>
                  </div>
                </li>`,c}).join("");document.querySelector(`.${$}`).innerHTML=a},f=Number.isInteger(o)===!0?o-1:0;l(f),u(s()[f]);const p=()=>{Array.from(document.querySelectorAll(".tui-page-btn")).forEach(a=>{Number.isInteger(Number(a.textContent))&&a.classList.add("tui-number-item")})};p();function A(t){p();try{if(t.target===t.currentTarget)return;(t.target.classList.contains("tui-prev")||t.target.classList.contains("tui-ico-prev"))&&(l(Number(document.querySelector(".tui-is-selected").textContent)-1),u(s()[Number(document.querySelector(".tui-is-selected").textContent)-1])),(t.target.classList.contains("tui-next")||t.target.classList.contains("tui-ico-next")&&t.target.classList.contains("tui-is-disabled")===!1)&&(l(Number(document.querySelector(".tui-is-selected").textContent)-1),u(s()[Number(document.querySelector(".tui-is-selected").textContent)-1])),t.target.classList.contains("tui-number-item")&&(l(Number(t.target.textContent)-1),u(s()[Number(t.target.textContent)-1]))}catch{}}g.addEventListener("click",A)}const q="/starteam-proj-js/assets/coctail-27293f2f.webp",P="/starteam-proj-js/assets/coctail@2x-7864576c.webp";export{P as a,q as n,j as p};
