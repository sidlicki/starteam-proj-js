import{P as w,a as p,s as u}from"./add-remove-favorite-8672643f.js";function x(){const n=window.innerWidth;return Number(n>1280?"9":"8")}function A(n,c,h,v){let s=v===6?6:x(),$=3;n.length<=s&&document.querySelector(".tui-pagination").classList.add("visually-hidden");const g=document.getElementById("tui-pagination-container");new w(g,{totalItems:n.length,itemsPerPage:s,visiblePages:$}).getCurrentPage();const l=()=>{let t=[],a=s,e=0;for(let i=0;i<Math.ceil(n.length/s);i++){for(t.push([]),e;e<a&&n[e]!==void 0;e++)t[i].push(n[e]);a+=s}return t};console.log(l());let o;const y=t=>(t=t.toLowerCase(),t==="yes"?"Alcoholic":t==="no"?"Non-Alcoholic":"NA"),r=t=>{console.log(t),console.log(l()[t]),console.log("");const a=l()[t].map(e=>{const{_id:i,drink:d,drinkThumb:f,description:m}=e;return c==="byName"||c==="byAbc"?o=`
                <li class="cocktail-card" id="${i}">
                        <img class="cocktail-image" src="${f}" onerror="this.src='${p}'" alt="${d}" loading="lazy" width="307" height="257"/>
                        <h3 class="cocktail-name">${d.slice(0,25)}</h3>
                        <p class="cocktail-info">${m.slice(0,115)+"..."}</p>
                        <div class="btns-info">
                            <button type="button" data-action="learnmore" class="js-learn-more learn-more-button" id="${i}">Learn more</button>
                            <button type="button" data-action="addtofav" class="js-add-to add-to-button" id="${i}">
                                <svg class="icon-heart" width="18px" height="18px">
                                    <use href="${u}#icon-heart"></use>
                                </svg>
                            </button>
                        </div>
                    </li>
                `:c==="byfavoriteCoctails"?o=`<li class="cocktail-list-favorite">
                <img class="cocktail-item-img-favorite" src="${f}" onerror="this.src='${p}'" alt="preview cocktail" width="307" height="auto">
                <div class="trk">
                <h2 class="cocktail-name-favorite">${d.slice(0,25)}</h2>
                <p class="description-container-favorite">${m.slice(0,111)+" . . ."}</p>
                <div class="button-wrap-favorite" >
                    <button type="button" data-action="learnmore" class="learn-more-favorite" id="${i}">LEARN MORE</button>
                    <button type="button" class="remove-favorite" id="${i}">
                        <svg class="svg-icon-favorite-trash" width="18" height="18">
                            <use href="${u}#icon-trash"></use>
                        </svg>
                    </button>
                </div>
                </div>
            </li>`:o=`
                <li class="fav-ingredients-list-item" data-ingredient-id="${e._id}">
                  <h2 class="fav-ingredient-title">${e.title||"No title"}</h2>
                  <p class="fav-ingredient-alcohol">${y(e.alcohol)}</p>
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
                            <use href="${u}#icon-trash"></use>
                        </svg>
                    </button>
                  </div>
                </li>`,o}).join("");console.log(o),document.querySelector(`.${h}`).innerHTML=a};r(0);const b=()=>{Array.from(document.querySelectorAll(".tui-page-btn")).forEach(a=>{Number.isInteger(Number(a.textContent))&&a.classList.add("tui-number-item")})};b();function k(t){if(b(),t.target===t.currentTarget){console.log("out button");return}(t.target.classList.contains("tui-prev")||t.target.classList.contains("tui-ico-prev"))&&r(Number(document.querySelector(".tui-is-selected").textContent)-1),(t.target.classList.contains("tui-next")||t.target.classList.contains("tui-ico-next")&&t.target.classList.contains("tui-is-disabled")===!1)&&r(Number(document.querySelector(".tui-is-selected").textContent)-1),t.target.classList.contains("tui-number-item")&&r(Number(t.target.textContent)-1)}g.addEventListener("click",k)}const C="/starteam-proj-js/assets/coctail-27293f2f.webp",L="/starteam-proj-js/assets/coctail@2x-7864576c.webp";export{L as a,x as g,C as n,A as p};
