import{d as g,n as u,a as v,e as p}from"./main-start-2b0b6e3d.js";import{p as l,n as b,a as T}from"./coctail@2x-0546fbaa.js";const a=document.querySelector(".search-input"),h=document.querySelector(".cocktails-list"),r=document.querySelector(".wrapper-loader"),k=document.querySelector(".cocktails-header"),d=`
          <div>
            <picture>
                <!-- TABLET -->
                <source srcset="${b} 1x, ${T} 2x" type="image/webp" media="(min-width: 768px)">
                <!-- MOBILE -->
                <source srcset="${u} 1x, ${v} 2x" type="image/webp" media="(min-width: 320px)">
                <img class="no-fav-cocktail-img" src="${u}" alt="cocktail">
            </picture>
            <p class="no-fav-cocktail-text">
            Sorry, we <span class="no-fav-cocktail-color">didn’t find</span> any cocktail for you
                
            </p>
          </div>
        `;a.addEventListener("keyup",q);function q(t){if(t.preventDefault(),t.key==="Enter"){const n=a.value.trim();a.value="",r.classList.remove("is-hidden"),h.innerHTML="",k.innerHTML="Searching results",n&&g(n).then(e=>{if(e&&e.length>0){document.querySelector(".tui-pagination").classList.remove("visually-hidden");try{l(e,"byName","cocktails-list")}catch{}finally{r.classList.add("is-hidden")}}else h.innerHTML=d,document.querySelector(".tui-pagination").classList.add("visually-hidden"),r.classList.add("is-hidden")}).catch(e=>{console.error("Error fetching cocktails:",e)})}}const M=document.querySelector(".js-search-menu"),c=document.querySelector(".cocktails-list"),E=document.querySelector(".js-search-mobile"),s=document.querySelector(".wrapper-loader"),m=document.querySelector(".cocktails-header");M.addEventListener("click",H);function H(t){let n=t.target.textContent;c.innerHTML="",s.classList.remove("is-hidden"),m.innerHTML="Searching results",p(n).then(e=>{if(e&&e.length>0){document.querySelector(".tui-pagination").classList.remove("visually-hidden");try{l(e,"byName","cocktails-list")}catch{}finally{s.classList.add("is-hidden")}}else c.innerHTML=d,document.querySelector(".tui-pagination").classList.add("visually-hidden"),s.classList.add("is-hidden")}).catch(e=>{console.error("Error fetching cocktails:",e)})}E.addEventListener("change",w);function w(t){let e=t.target.options[t.target.selectedIndex].value;c.innerHTML="",s.classList.remove("is-hidden"),m.innerHTML="Searching results",p(e).then(i=>{if(i&&i.length>0){document.querySelector(".tui-pagination").classList.remove("visually-hidden");try{l(i,"byName","cocktails-list")}catch{}finally{s.classList.add("is-hidden")}}else c.innerHTML=d,document.querySelector(".tui-pagination").classList.add("visually-hidden"),s.classList.add("is-hidden")}).catch(i=>{console.error("Error fetching cocktails:",i)})}const y={formSelect:document.querySelector(".js-search-mobile"),searchList:document.querySelector(".js-search-menu")},L=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"];let f=[];function x(t){f=t.map(n=>`<option class="search-select-one" value="${n}">${n}</option>`).join("")}x(L);y.formSelect.insertAdjacentHTML("beforeend",f);let S=[];function $(t){S=t.map(n=>`<li class="search-menu-item">${n}</li>`).join("")}$(L);y.searchList.insertAdjacentHTML("beforeend",S);const o=document.getElementById("scrollToTopBtn");window.addEventListener("scroll",()=>{document.body.scrollTop>1e3||document.documentElement.scrollTop>2e3?o.style.display="block":o.style.display="none"});o.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
