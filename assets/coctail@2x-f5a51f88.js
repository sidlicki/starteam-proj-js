import{f as b,b as L}from"./coctail-d80e3fc9.js";const r=document.querySelector(".modal-cocktail-content"),p=document.querySelector(".modal-btn-close"),v=document.querySelector(".overlay"),u=document.querySelector(".modal1");let i=JSON.parse(localStorage.getItem("favoriteCocktails"))||[];function h(a){return a.map(e=>`<li class="add-li"><a href="" class="add-two" id="${e.ingredientId}">${e.title}</a>
  </li>`).join("")}function C({drink:a,drinkThumb:e,instructions:t,ingredients:o}){return`<div class="add-cont">
  <img class="modal-cocktail-img" src="${e}" alt="" />
  <div class="add-content">
  <h1 class="modal-cocktail-title">${a}</h1>
  <h2 class="modal-cocktail-subtitle">INGREDIENTS:</h2>
  <p class="modal-cocktail-text add-one">Per cocktail</p>
  <ul class="modal-cocktail-ingred">${h(o)}</ul>
</div>
</div>
  <h2 class="modal-cocktail-subtitle add-subtitle">INSTRUCTIONS:</h2>
  <p class="modal-cocktail-text add-one">${t}</p>
  <button type="button" class="modal-add-cocktail-btn-fav">ADD TO FAVORITE</button>
  <button type="button" class="modal-remove-cocktail-btn-fav is-hidden">REMOVE FROM FAVORITE</button>
  <button type="button" class="modal-cocktail-btn-back" name="close-modal">BACK</button>`}async function _(a){try{const e=await b(a);if(e.length===0){console.log("Error");return}r.innerHTML="",r.innerHTML=C(e[0]),I();const t=document.querySelector(".modal-add-cocktail-btn-fav"),o=document.querySelector(".modal-remove-cocktail-btn-fav");i.findIndex(n=>n===e[0]._id)!==-1&&(t.classList.add("is-hidden"),o.classList.remove("is-hidden")),t.addEventListener("click",()=>{t.classList.add("is-hidden"),o.classList.remove("is-hidden"),T(e[0]._id)}),o.addEventListener("click",()=>{t.classList.remove("is-hidden"),o.classList.add("is-hidden"),q(e[0]._id)}),p.addEventListener("click",f),r.addEventListener("click",n=>{n.target.name=="close-modal"&&f()})}catch(e){console.log(e)}}v.addEventListener("click",function(){u.classList.remove("active"),this.classList.remove("active")});function I(){v.classList.add("active"),u.classList.add("active")}function f(){u.classList.remove("active"),v.classList.remove("active")}const m=document.querySelector(".modal-ingredient-content"),y=document.querySelector(".js-modal-close"),S=document.querySelector(".modal-cocktail-window"),c=document.querySelector(".overlay"),g=document.querySelector(".modal1"),l=document.querySelector(".modal2");let s=JSON.parse(localStorage.getItem("favoriteIngredients"))||[];function F({_id:a,title:e,description:t,type:o,abv:d,flavour:n,country:k}){return`<div class="add-cont">
 
  <div class="add-content">
  <h1 class="modal-ingred-title">${e}</h1>
  
  <p class="modal-ingred-text add-one">${o}</p>
  <div class="modal-cocktail-ingred add-two"></div>
</div>
</div>
  <h2 class="modal-ingred-subtitle add-subtitle"></h2>
  <p class="modal-ingred-text add-one">${e}: ${t}</p>
  <ul class="ingredients-list">
  <li class="ingredients-element">Type: ${o}</li>
  <li class="ingredients-element">Country of origin: ${k}</li>
  <li class="ingredients-element">Alcohol by volume: ${d}</li>
  <li class="ingredients-element">Flavour: ${n}</li>
</ul>
  <button type="button" class="modal-add-ingred-btn-fav">ADD TO FAVORITE</button>
  <button type="button" class="modal-remove-ingred-btn-fav is-hidden">REMOVE FROM FAVORITE</button>
  <button type="button" class="modal-ingred-btn-back" name="close-modal" >BACK</button>`}S.addEventListener("click",E);async function E(a){if(a.preventDefault(),a.target.nodeName=="A")try{const e=await L(a.target.id);if(e.length===0){console.log("Error");return}m.innerHTML="",m.innerHTML=F(e[0]),R(),O();const t=document.querySelector(".modal-add-ingred-btn-fav"),o=document.querySelector(".modal-remove-ingred-btn-fav");s.findIndex(n=>n===e[0]._id)!==-1&&(t.classList.add("is-hidden"),o.classList.remove("is-hidden")),t.addEventListener("click",()=>{t.classList.add("is-hidden"),o.classList.remove("is-hidden"),A(e[0]._id)}),o.addEventListener("click",()=>{t.classList.remove("is-hidden"),o.classList.add("is-hidden"),N(e[0]._id)}),y.addEventListener("click",M),m.addEventListener("click",n=>{n.target.name=="close-modal"&&x()})}catch(e){console.log(e)}}c.addEventListener("click",function(){l.classList.remove("active"),this.classList.remove("active")});function O(){c.classList.add("active"),l.classList.add("active")}function x(){l.classList.remove("active"),c.classList.remove("active"),$()}function M(){l.classList.remove("active"),c.classList.remove("active")}function $(){c.classList.add("active"),g.classList.add("active")}function R(){g.classList.remove("active"),c.classList.remove("active")}function T(a){if(i.findIndex(t=>t===a)===-1)return i.push(a),localStorage.setItem("favoriteCocktails",JSON.stringify(i)),i}function q(a){const e=i.findIndex(t=>t===a);if(e!==-1)return i.splice(e,1),localStorage.setItem("favoriteCocktails",JSON.stringify(i)),i}function A(a){if(s.findIndex(t=>t===a)===-1)return s.push(a),localStorage.setItem("favoriteIngredients",JSON.stringify(s)),s}function N(a){const e=s.findIndex(t=>t===a);if(e!==-1)return s.splice(e,1),localStorage.setItem("favoriteIngredients",JSON.stringify(s)),s}const j="/starteam-proj-js/assets/coctail-27293f2f.webp",J="/starteam-proj-js/assets/coctail@2x-7864576c.webp";export{J as a,q as b,T as c,i as f,j as n,_ as o};
