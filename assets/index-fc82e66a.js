import{d as h,n as o,a as y,e as s}from"./main-start-6a79ef26.js";import{p as r,n as L,a as f}from"./coctail@2x-eb2020ac.js";const i=document.querySelector(".search-input"),b=document.querySelector(".cocktails-list"),a=`
          <div>
            <picture>
                <!-- TABLET -->
                <source srcset="${L} 1x, ${f} 2x" type="image/webp" media="(min-width: 768px)">
                <!-- MOBILE -->
                <source srcset="${o} 1x, ${y} 2x" type="image/webp" media="(min-width: 320px)">
                <img class="no-fav-cocktail-img" src="${o}" alt="cocktail">
            </picture>
            <p class="no-fav-cocktail-text">
            Sorry, we <span class="no-fav-cocktail-color">didn’t find</span> any cocktail for you
                
            </p>
          </div>
        `;i.addEventListener("keyup",g);function g(t){if(t.preventDefault(),t.key==="Enter"){const n=i.value.trim();i.value="",n&&h(n).then(e=>{e&&e.length>0?(document.querySelector(".tui-pagination").classList.remove("visually-hidden"),r(e,"byName","cocktails-list")):(b.innerHTML=a,document.querySelector(".tui-pagination").classList.add("visually-hidden"))}).catch(e=>{console.error("Error fetching cocktails:",e)})}}const S=document.querySelector(".js-search-menu"),l=document.querySelector(".cocktails-list"),v=document.querySelector(".js-search-mobile");S.addEventListener("click",k);function k(t){let n=t.target.textContent;s(n).then(e=>{e&&e.length>0?(document.querySelector(".tui-pagination").classList.remove("visually-hidden"),r(e,"byAbc","cocktails-list")):(document.querySelector(".tui-pagination").classList.add("visually-hidden"),l.innerHTML=a)}).catch(e=>{console.error("Error fetching cocktails:",e)})}v.addEventListener("change",q);function q(t){let e=t.target.options[t.target.selectedIndex].value;s(e).then(c=>{c&&c.length>0?(document.querySelector(".tui-pagination").classList.remove("visually-hidden"),r(c,"byAbc","cocktails-list")):(l.innerHTML=a,document.querySelector(".tui-pagination").classList.add("visually-hidden"))}).catch(c=>{console.error("Error fetching cocktails:",c)})}const u={formSelect:document.querySelector(".js-search-mobile"),searchList:document.querySelector(".js-search-menu")},d=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"];let p=[];function x(t){p=t.map(n=>`<option class="search-select-one" value="${n}">${n}</option>`).join("")}x(d);u.formSelect.insertAdjacentHTML("beforeend",p);let m=[];function E(t){m=t.map(n=>`<li class="search-menu-item">${n}</li>`).join("")}E(d);u.searchList.insertAdjacentHTML("beforeend",m);
