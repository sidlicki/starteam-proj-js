import{P as A,a as v,s as d}from"./add-remove-favorite-e397248f.js";function C(){const n=window.innerWidth;return Number(n>1280?"9":"8")}function j(n,l,y,$,o){console.log("Виклик pagination");let s=$===6?6:C(),N=3;n.length<=s&&document.querySelector(".tui-pagination").classList.add("visually-hidden");const g=document.getElementById("tui-pagination-container");new A(g,{totalItems:n.length,itemsPerPage:s,visiblePages:N}).getCurrentPage();let k=Array.from(document.querySelectorAll(".tui-page-btn"));console.log("currentPage= "+o),Number.isInteger(o)===!0&&k.forEach(t=>{Number(t.textContent)===o&&(console.log(t),t.click())});const b=()=>{let t=[],a=s,e=0;for(let i=0;i<Math.ceil(n.length/s);i++){for(t.push([]),e;e<a&&n[e]!==void 0;e++)t[i].push(n[e]);a+=s}return t};console.log(b());let r;const x=t=>(t=t.toLowerCase(),t==="yes"?"Alcoholic":t==="no"?"Non-Alcoholic":"NA"),c=t=>{const a=b()[t].map(e=>{const{_id:i,drink:u,drinkThumb:p,description:h}=e;return l==="byName"||l==="byAbc"?r=`
                <li class="cocktail-card">
                        <img class="cocktail-image" src="${p}" onerror="this.src='${v}'" alt="${u}" loading="lazy" width="307" height="257"/>
                        <h3 class="cocktail-name">${u.slice(0,25)}</h3>
                        <p class="cocktail-info">${h.slice(0,115)+"..."}</p>
                        <div class="btns-info">
                            <button type="button" data-action="learnmore" class="js-learn-more learn-more-button" id="${i}">Learn more</button>
                            <button type="button" data-action="addtofav" class="js-add-to add-to-button" id="${i}">
                                <svg class="icon-heart" width="18px" height="18px">
                                    <use href="${d}#icon-heart"></use>
                                </svg>
                            </button>
                        </div>
                    </li>
                `:l==="byfavoriteCoctails"?r=`<li class="cocktail-list-favorite">
                <img class="cocktail-item-img-favorite" src="${p}" onerror="this.src='${v}'" alt="preview cocktail" width="307" height="auto">
                <div class="trk">
                <h2 class="cocktail-name-favorite">${u.slice(0,25)}</h2>
                <p class="description-container-favorite">${h.slice(0,111)+" . . ."}</p>
                <div class="button-wrap-favorite" >
                    <button type="button" data-action="learnmore" class="learn-more-favorite" id="${i}">LEARN MORE</button>
                    <button type="button" class="remove-favorite" id="${i}">
                        <svg class="svg-icon-favorite-trash" width="18" height="18">
                            <use href="${d}#icon-trash"></use>
                        </svg>
                    </button>
                </div>
                </div>
            </li>`:r=`
                <li class="fav-ingredients-list-item" data-ingredient-id="${e._id}">
                  <h2 class="fav-ingredient-title">${e.title||"No title"}</h2>
                  <p class="fav-ingredient-alcohol">${x(e.alcohol)}</p>
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
                            <use href="${d}#icon-trash"></use>
                        </svg>
                    </button>
                  </div>
                </li>`,r}).join("");document.querySelector(`.${y}`).innerHTML=a},f=Number.isInteger(o)===!0?o-1:0;console.log("value= "+f),console.log(""),c(f);const m=()=>{Array.from(document.querySelectorAll(".tui-page-btn")).forEach(a=>{Number.isInteger(Number(a.textContent))&&a.classList.add("tui-number-item")})};m();function w(t){if(m(),t.target===t.currentTarget){console.log("out button");return}(t.target.classList.contains("tui-prev")||t.target.classList.contains("tui-ico-prev"))&&c(Number(document.querySelector(".tui-is-selected").textContent)-1),(t.target.classList.contains("tui-next")||t.target.classList.contains("tui-ico-next")&&t.target.classList.contains("tui-is-disabled")===!1)&&c(Number(document.querySelector(".tui-is-selected").textContent)-1),t.target.classList.contains("tui-number-item")&&c(Number(t.target.textContent)-1)}g.addEventListener("click",w)}const I="/starteam-proj-js/assets/coctail-27293f2f.webp",P="/starteam-proj-js/assets/coctail@2x-7864576c.webp";export{P as a,C as g,I as n,j as p};
