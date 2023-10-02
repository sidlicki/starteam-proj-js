import{f as m}from"./coctail@2x-ea15aa9c.js";const i=document.querySelector(".modal-cocktail-content"),v=document.querySelector(".modal-btn-close"),l=document.querySelector(".overlay"),n=document.querySelector(".modal");let o=JSON.parse(localStorage.getItem("favoriteCocktails"))||[];function u(a){return a.map(t=>`<li data-id="${t.ingredientId}" class="add-li"><a href="" class="add-two">${t.title}</a>
  </li>`).join("")}function k({drink:a,drinkThumb:t,instructions:e,ingredients:c}){return`<div class="add-cont">
  <img class="modal-cocktail-img" src="${t}" alt="" />
  <div class="add-content">
  <h1 class="modal-cocktail-title">${a}</h1>
  <h2 class="modal-cocktail-subtitle">INGREDIENTS:</h2>
  <p class="modal-cocktail-text add-one">Per cocktail</p>
  <ul class="modal-cocktail-ingred">${u(c)}</ul>
</div>
</div>
  <h2 class="modal-cocktail-subtitle add-subtitle">INSTRUCTIONS:</h2>
  <p class="modal-cocktail-text add-one">${e}</p>
  <button type="button" class="modal-add-cocktail-btn-fav">ADD TO FAVORITE</button>
  <button type="button" class="modal-remove-cocktail-btn-fav is-hidden">REMOVE FROM FAVORITE</button>
  <button type="button" class="modal-cocktail-btn-back" name="close-modal">BACK</button>`}async function h(a){try{const t=await m(a);if(t.length===0){console.log("Error");return}i.innerHTML="",i.innerHTML=k(t[0]),f();const e=document.querySelector(".modal-add-cocktail-btn-fav"),c=document.querySelector(".modal-remove-cocktail-btn-fav");o.findIndex(s=>s===t[0]._id)!==-1&&(e.classList.add("is-hidden"),c.classList.remove("is-hidden")),e.addEventListener("click",()=>{e.classList.add("is-hidden"),c.classList.remove("is-hidden"),b(t[0]._id)}),c.addEventListener("click",()=>{e.classList.remove("is-hidden"),c.classList.add("is-hidden"),p(t[0]._id)}),v.addEventListener("click",d),i.addEventListener("click",s=>{s.target.name=="close-modal"&&d()})}catch(t){console.log(t)}}l.addEventListener("click",function(){n.classList.remove("active"),this.classList.remove("active")});function f(){l.classList.add("active"),n.classList.add("active")}function d(){n.classList.remove("active"),l.classList.remove("active")}function b(a){if(o.findIndex(e=>e===a)===-1)return o.push(a),localStorage.setItem("favoriteCocktails",JSON.stringify(o)),o}function p(a){const t=o.findIndex(e=>e===a);if(t!==-1)return o.splice(t,1),localStorage.setItem("favoriteCocktails",JSON.stringify(o)),o}const L="/starteam-proj-js/assets/coctail-27293f2f.webp",g="/starteam-proj-js/assets/coctail@2x-7864576c.webp";export{g as a,b,o as f,L as n,h as o};
