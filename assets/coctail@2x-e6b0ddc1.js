import{f as m}from"./coctail@2x-78857b83.js";const s=document.querySelector(".modal-cocktail-content"),u=document.querySelector(".modal-btn-close"),l=document.querySelector(".overlay"),n=document.querySelector(".modal"),v=document.querySelector(".cocktails-list")??document.querySelector(".fav-cocktail-list");let o=JSON.parse(localStorage.getItem("favoriteCocktails"))||[];function k(e){return e.map(t=>`<li data-id="${t.ingredientId}" class="add-li"><a href="" class="add-two">${t.title}</a>
  </li>`).join("")}function f({drink:e,drinkThumb:t,instructions:a,ingredients:c}){return`<div class="add-cont">
  <img class="modal-cocktail-img" src="${t}" alt="" />
  <div class="add-content">
  <h1 class="modal-cocktail-title">${e}</h1>
  <h2 class="modal-cocktail-subtitle">INGREDIENTS:</h2>
  <p class="modal-cocktail-text add-one">Per cocktail</p>
  <ul class="modal-cocktail-ingred">${k(c)}</ul>
</div>
</div>
  <h2 class="modal-cocktail-subtitle add-subtitle">INSTRUCTIONS:</h2>
  <p class="modal-cocktail-text add-one">${a}</p>
  <button type="button" class="modal-add-cocktail-btn-fav">ADD TO FAVORITE</button>
  <button type="button" class="modal-remove-cocktail-btn-fav is-hidden">REMOVE FROM FAVORITE</button>
  <button type="button" class="modal-cocktail-btn-back" name="close-modal">BACK</button>`}v.addEventListener("click",b);async function b(e){if(e.target.nodeName=="BUTTON")try{const t=await m(e.target.id);if(t.length===0){console.log("Error");return}s.innerHTML="",s.innerHTML=f(t[0]),p();const a=document.querySelector(".modal-add-cocktail-btn-fav"),c=document.querySelector(".modal-remove-cocktail-btn-fav");o.findIndex(i=>i===t[0]._id)!==-1&&(a.classList.add("is-hidden"),c.classList.remove("is-hidden")),a.addEventListener("click",()=>{a.classList.add("is-hidden"),c.classList.remove("is-hidden"),L(t[0]._id)}),c.addEventListener("click",()=>{a.classList.remove("is-hidden"),c.classList.add("is-hidden"),C(t[0]._id)}),u.addEventListener("click",d),s.addEventListener("click",i=>{i.target.name=="close-modal"&&d()})}catch(t){console.log(t)}}l.addEventListener("click",function(){n.classList.remove("active"),this.classList.remove("active")});function p(){l.classList.add("active"),n.classList.add("active")}function d(){n.classList.remove("active"),l.classList.remove("active")}function L(e){if(o.findIndex(a=>a===e)===-1)return o.push(e),localStorage.setItem("favoriteCocktails",JSON.stringify(o)),o}function C(e){const t=o.findIndex(a=>a===e);if(t!==-1)return o.splice(t,1),localStorage.setItem("favoriteCocktails",JSON.stringify(o)),o}const g="/starteam-proj-js/assets/coctail-27293f2f.webp",y="/starteam-proj-js/assets/coctail@2x-7864576c.webp";export{y as a,g as n};
