import{f as k,b as L}from"./coctail-9f4942b8.js";const r=document.querySelector(".modal-cocktail-content"),h=document.querySelector(".modal-btn-close"),v=document.querySelector(".overlay"),u=document.querySelector(".modal1");let d=JSON.parse(localStorage.getItem("favoriteCocktails"))||[];function p(o){return o.map(e=>`<li class="add-li"><a href="" class="add-two" id="${e.ingredientId}">${e.title}</a>
  </li>`).join("")}function y({drink:o,drinkThumb:e,instructions:t,ingredients:a}){return`<div class="add-cont">
  <img class="modal-cocktail-img" src="${e}" alt="" />
  <div class="add-content">
  <h1 class="modal-cocktail-title">${o}</h1>
  <h2 class="modal-cocktail-subtitle">INGREDIENTS:</h2>
  <p class="modal-cocktail-text add-one">Per cocktail</p>
  <ul class="modal-cocktail-ingred">${p(a)}</ul>
</div>
</div>
  <h2 class="modal-cocktail-subtitle add-subtitle">INSTRUCTIONS:</h2>
  <p class="modal-cocktail-text add-one">${t}</p>
  <button type="button" class="modal-add-cocktail-btn-fav">ADD TO FAVORITE</button>
  <button type="button" class="modal-remove-cocktail-btn-fav is-hidden">REMOVE FROM FAVORITE</button>
  <button type="button" class="modal-cocktail-btn-back" name="close-modal">BACK</button>`}async function _(o){try{const e=await k(o);if(e.length===0){console.log("Error");return}r.innerHTML="",r.innerHTML=y(e[0]),C();const t=document.querySelector(".modal-add-cocktail-btn-fav"),a=document.querySelector(".modal-remove-cocktail-btn-fav");d.findIndex(n=>n===e[0]._id)!==-1&&(t.classList.add("is-hidden"),a.classList.remove("is-hidden")),t.addEventListener("click",()=>{t.classList.add("is-hidden"),a.classList.remove("is-hidden"),T(e[0]._id)}),a.addEventListener("click",()=>{t.classList.remove("is-hidden"),a.classList.add("is-hidden"),q(e[0]._id)}),h.addEventListener("click",f),r.addEventListener("click",n=>{n.target.name=="close-modal"&&f()})}catch(e){console.log(e)}}v.addEventListener("click",function(){u.classList.remove("active"),document.body.classList.remove("overflow-hidden"),this.classList.remove("active")});function C(){v.classList.add("active"),u.classList.add("active"),document.body.classList.add("overflow-hidden")}function f(){u.classList.remove("active"),v.classList.remove("active"),document.body.classList.remove("overflow-hidden")}const m=document.querySelector(".modal-ingredient-content"),I=document.querySelector(".js-modal-close"),S=document.querySelector(".modal-cocktail-window"),i=document.querySelector(".overlay"),g=document.querySelector(".modal1"),l=document.querySelector(".modal2");let s=JSON.parse(localStorage.getItem("favoriteIngredients"))||[];function F({_id:o,title:e,description:t,type:a,abv:c,flavour:n,country:b}){return`<div class="add-cont">
 
  <div class="add-content">
  <h1 class="modal-ingred-title">${e}</h1>
  
  <p class="modal-ingred-text add-one">${a}</p>
  <div class="modal-cocktail-ingred add-two"></div>
</div>
</div>
  <h2 class="modal-ingred-subtitle add-subtitle"></h2>
  <p class="modal-ingred-text add-one">${e}: ${t}</p>
  <ul class="ingredients-list">
  <li class="ingredients-element">Type: ${a}</li>
  <li class="ingredients-element">Country of origin: ${b}</li>
  <li class="ingredients-element">Alcohol by volume: ${c}</li>
  <li class="ingredients-element">Flavour: ${n}</li>
</ul>
  <button type="button" class="modal-add-ingred-btn-fav">ADD TO FAVORITE</button>
  <button type="button" class="modal-remove-ingred-btn-fav is-hidden">REMOVE FROM FAVORITE</button>
  <button type="button" class="modal-ingred-btn-back" name="close-modal" >BACK</button>`}S.addEventListener("click",E);async function E(o){if(o.preventDefault(),o.target.nodeName=="A")try{const e=await L(o.target.id);if(e.length===0){console.log("Error");return}m.innerHTML="",m.innerHTML=F(e[0]),R(),O();const t=document.querySelector(".modal-add-ingred-btn-fav"),a=document.querySelector(".modal-remove-ingred-btn-fav");s.findIndex(n=>n===e[0]._id)!==-1&&(t.classList.add("is-hidden"),a.classList.remove("is-hidden")),t.addEventListener("click",()=>{t.classList.add("is-hidden"),a.classList.remove("is-hidden"),A(e[0]._id)}),a.addEventListener("click",()=>{t.classList.remove("is-hidden"),a.classList.add("is-hidden"),w(e[0]._id)}),I.addEventListener("click",M),m.addEventListener("click",n=>{n.target.name=="close-modal"&&x()})}catch(e){console.log(e)}}i.addEventListener("click",function(){l.classList.remove("active"),document.body.classList.remove("overflow-hidden"),this.classList.remove("active")});function O(){i.classList.add("active"),l.classList.add("active")}function x(){l.classList.remove("active"),i.classList.remove("active"),$()}function M(){l.classList.remove("active"),i.classList.remove("active"),document.body.classList.remove("overflow-hidden")}function $(){i.classList.add("active"),g.classList.add("active")}function R(){g.classList.remove("active"),i.classList.remove("active")}function T(o){if(d.findIndex(t=>t===o)===-1)return d.push(o),localStorage.setItem("favoriteCocktails",JSON.stringify(d)),d}function q(o){const e=d.findIndex(t=>t===o);if(e!==-1)return d.splice(e,1),localStorage.setItem("favoriteCocktails",JSON.stringify(d)),d}function A(o){if(s.findIndex(t=>t===o)===-1)return s.push(o),localStorage.setItem("favoriteIngredients",JSON.stringify(s)),s}function w(o){const e=s.findIndex(t=>t===o);if(e!==-1)return s.splice(e,1),localStorage.setItem("favoriteIngredients",JSON.stringify(s)),s}const j="/starteam-proj-js/assets/coctail-27293f2f.webp",J="/starteam-proj-js/assets/coctail@2x-7864576c.webp";export{J as a,q as b,T as c,d as f,j as n,_ as o};
