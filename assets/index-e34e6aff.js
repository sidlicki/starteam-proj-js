import"./mobile-menu-a30ace53.js";import{d as m,s as v,a as k,f}from"./coctail@2x-17c11c10.js";function h(t){return t.map(({description:a,drink:e,drinkThumb:c,_id:i})=>`
    <li class="cocktail-card" id="${i}">
            <img class="cocktail-image" src="${c}" onerror="this.src='${m}'" alt="${e}" loading="lazy" width="307" height="257"/>
            <h3 class="cocktail-name">${e.slice(0,25)}</h3>
            <p class="cocktail-info">${a.slice(0,115)+"..."}</p>
            <div class="btns-info">
                <button type="button" data-action="learnmore" class="js-learn-more learn-more-button" id="${i}">Learn more</button>
                <button type="button" data-action="addtofav" class="js-add-to add-to-button" id="${i}">
                    <svg class="icon-heart" width="18px" height="18px">
                        <use href="${v}#icon-heart"></use>
                    </svg>
                </button>
            </div>
        </li>
    `).join("")}function g(){return window.innerWidth>1280?"9":"8"}const u=document.querySelector(".cocktails-list");let b=g();k(b).then(t=>{u.innerHTML=h(t)});u.addEventListener("click",function(t){if(t.target.dataset.action=="addtofav"&&console.log("Add to Favorite, ID",t.target.id),t.target.dataset.action=="learnmore"){let a=t.target.id;console.log("Learn More, ID",a)}});function p(t){if(o.findIndex(e=>e===t)===-1)return o.push(t),localStorage.setItem("favoriteCocktails",JSON.stringify(o)),o}function L(t){const a=o.findIndex(e=>e===t);if(a!==-1)return o.splice(a,1),localStorage.setItem("favoriteCocktails",JSON.stringify(o)),o}const s=document.querySelector(".modal-cocktail-content"),y=document.querySelector(".modal-btn-close"),l=document.querySelector(".overlay"),d=document.querySelector(".modal"),C=document.querySelector(".cocktails-list");document.querySelector(".fav-cocktail-list");let o=JSON.parse(localStorage.getItem("favoriteCocktails"))||[];function S(t){return t.map(a=>`<li data-id="${a.ingredientId}" class="add-li"><a href="" class="add-two">${a.title}</a>
  </li>`).join("")}function I({drink:t,drinkThumb:a,instructions:e,ingredients:c}){return`<div class="add-cont">
  <img class="modal-cocktail-img" src="${a}" alt="" />
  <div class="add-content">
  <h1 class="modal-cocktail-title">${t}</h1>
  <h2 class="modal-cocktail-subtitle">INGREDIENTS:</h2>
  <p class="modal-cocktail-text add-one">Per cocktail</p>
  <ul class="modal-cocktail-ingred">${S(c)}</ul>
</div>
</div>
  <h2 class="modal-cocktail-subtitle add-subtitle">INSTRUCTIONS:</h2>
  <p class="modal-cocktail-text add-one">${e}</p>
  <button type="button" class="modal-add-cocktail-btn-fav">ADD TO FAVORITE</button>
  <button type="button" class="modal-remove-cocktail-btn-fav is-hidden">REMOVE FROM FAVORITE</button>
  <button type="button" class="modal-cocktail-btn-back" name="close-modal">BACK</button>`}C.addEventListener("click",$);async function $(t){if(t.target.nodeName=="BUTTON")try{const a=await f(t.target.id);if(a.length===0){console.log("Error");return}s.innerHTML="",s.innerHTML=I(a[0]),E();const e=document.querySelector(".modal-add-cocktail-btn-fav"),c=document.querySelector(".modal-remove-cocktail-btn-fav");o.findIndex(n=>n===a[0]._id)!==-1&&(e.classList.add("is-hidden"),c.classList.remove("is-hidden")),e.addEventListener("click",()=>{e.classList.add("is-hidden"),c.classList.remove("is-hidden"),p(a[0]._id)}),c.addEventListener("click",()=>{e.classList.remove("is-hidden"),c.classList.add("is-hidden"),L(a[0]._id)}),y.addEventListener("click",r),s.addEventListener("click",n=>{n.target.name=="close-modal"&&r()})}catch(a){console.log(a)}}l.addEventListener("click",function(){d.classList.remove("active"),this.classList.remove("active")});function E(){l.classList.add("active"),d.classList.add("active")}function r(){d.classList.remove("active"),l.classList.remove("active")}
