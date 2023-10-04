import{a as d,s as y,c as L,o as S,d as k,b as v,e as T,n as l,g as u}from"./add-remove-favorite-93807fbc.js";import{g as M,p as o,n as C,a as E}from"./coctail@2x-17e479d3.js";function m(e){return e.map(({description:t,drink:n,drinkThumb:a,_id:s})=>`
    <li class="cocktail-card">
            <img class="cocktail-image" src="${a}" onerror="this.src='${d}'" alt="${n}" loading="lazy" width="307" height="257"/>
            <h3 class="cocktail-name">${n.slice(0,25)}</h3>
            <p class="cocktail-info">${t.slice(0,115)+"..."}</p>
            <div class="btns-info">
                <button type="button" data-action="learnmore" class="js-learn-more learn-more-button" id="${s}">Learn more</button>
                <button type="button" data-action="addtofav" class="js-add-to add-to-button" id="${s}">
                    <svg class="icon-heart" width="18px" height="18px">
                        <use href="${y}#icon-heart"></use>
                    </svg>
                </button>
            </div>
        </li>
    `).join("")}const h=document.querySelector(".cocktails-list");let $=M();L($).then(e=>{h.innerHTML=m(e)});h.addEventListener("click",function(e){const t=e.target.id;switch(e.target.dataset.action){case"addtofav":console.log("Add to Favorite, ID",t);const n=e.target.children[0].classList;n.value=="icon-heart"?(n.replace("icon-heart","icon-heart-addtofavorite"),k(t)):(n.replace("icon-heart-addtofavorite","icon-heart"),v(t));break;case"learnmore":S(t);break}});document.body.addEventListener("click",q);function q(e){if(e.target.name==="add-cocktail"&&e.target.nodeName==="BUTTON"){let t=e.target.id;console.log(t),H(t)}}function H(e){document.getElementById(e).nextElementSibling.firstElementChild.classList.replace("icon-heart","icon-heart-addtofavorite")}document.body.addEventListener("click",x);function x(e){if(e.target.name==="remove-cocktail"&&e.target.nodeName==="BUTTON"){let t=e.target.id;A(t)}}function A(e){document.getElementById(e).nextElementSibling.firstElementChild.classList.replace("icon-heart-addtofavorite","icon-heart")}const c=document.querySelector(".search-input"),j=document.querySelector(".cocktails-list"),i=`
          <div>
            <picture>
                <!-- TABLET -->
                <source srcset="${C} 1x, ${E} 2x" type="image/webp" media="(min-width: 768px)">
                <!-- MOBILE -->
                <source srcset="${l} 1x, ${d} 2x" type="image/webp" media="(min-width: 320px)">
                <img class="no-fav-cocktail-img" src="${l}" alt="cocktail">
            </picture>
            <p class="no-fav-cocktail-text">
            Sorry, we <span class="no-fav-cocktail-color">didn’t find</span> any cocktail for you
                
            </p>
          </div>
        `;c.addEventListener("keyup",I);function I(e){if(e.preventDefault(),e.key==="Enter"){const t=c.value.trim();c.value="",t&&T(t).then(n=>{n&&n.length>0?(document.querySelector(".cocktails-header").innerHTML="Searching results",o(n,"byName","cocktails-list")):(j.innerHTML=i,document.querySelector(".tui-pagination").innerHTML="",document.querySelector(".cocktails-header").innerHTML="Searching results")}).catch(n=>{console.error("Error fetching cocktails:",n)})}}const B=document.querySelector(".js-search-menu"),r=document.querySelector(".cocktails-list"),w=document.querySelector(".js-search-mobile");B.addEventListener("click",R);function R(e){let t=e.target.textContent;u(t).then(n=>{n&&n.length>0?(document.querySelector(".cocktails-header").innerHTML="Searching results",o(n,"byAbc","cocktails-list")):(document.querySelector(".cocktails-header").innerHTML="Searching results",r.innerHTML=i)}).catch(n=>{console.error("Error fetching cocktails:",n),document.querySelector(".tui-pagination").innerHTML=""})}w.addEventListener("change",N);function N(e){let n=e.target.options[e.target.selectedIndex].value;u(n).then(a=>{a&&a.length>0?(r.innerHTML=m(a),o(a,"byAbc","cocktails-list")):(r.innerHTML=i,document.querySelector(".tui-pagination").innerHTML="")}).catch(a=>{console.error("Error fetching cocktails:",a)})}const p={formSelect:document.querySelector(".js-search-mobile"),searchList:document.querySelector(".js-search-menu")},g=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"];let f=[];function O(e){f=e.map(t=>`<option class="search-select-one" value="${t}">${t}</option>`).join("")}O(g);p.formSelect.insertAdjacentHTML("beforeend",f);let b=[];function W(e){b=e.map(t=>`<li class="search-menu-item">${t}</li>`).join("")}W(g);p.searchList.insertAdjacentHTML("beforeend",b);
