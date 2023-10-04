import{f as l,n as r,a as d,o as u,b as m}from"./add-remove-favorite-e397248f.js";import{p as f,n as g,a as k}from"./coctail@2x-2fd3f1ce.js";const s=document.querySelector(".fav-cocktail-list"),o=document.querySelector(".not-found");document.addEventListener("DOMContentLoaded",n);function i(){const e=document.querySelectorAll(".remove-favorite");e.forEach(a=>{a.addEventListener("click",()=>{let t;const c=a.id;m(c),document.querySelector(".tui-pagination").classList.contains("visually-hidden")===!1&&e.length!==0&&(t=Number(document.querySelector(".tui-is-selected").textContent),e.length===1&&(t=Number(document.querySelector(".tui-is-selected").textContent),t=t-1)),console.log("favoriteCurrentPage= "+t),n(t)})})}function p(e){e.target!==e.currentTarget&&(console.log("clickkk"),i())}async function n(e){const a=JSON.parse(localStorage.getItem("favoriteCocktails"))||[];if(a.length>0){o.classList.add("is-hidden");const t=await l(a.map(c=>c));console.log(t),f(t,"byfavoriteCoctails","fav-cocktail-list",6,e),i(),document.querySelector(".tui-pagination").addEventListener("click",p),o.innerHTML=""}else document.querySelector(".tui-pagination").classList.add("visually-hidden"),o.classList.remove("is-hidden"),o.innerHTML=`
            <picture>
                <!-- TABLET -->
                <source srcset="${g} 1x, ${k} 2x" type="image/webp" media="(min-width: 768px)">
                <!-- MOBILE -->
                <source srcset="${r} 1x, ${d} 2x" type="image/webp" media="(min-width: 320px)">
                <img class="no-fav-cocktail-img" src="${r}" alt="cocktail">
            </picture>
            <p class="no-fav-cocktail-text">
                You haven't added any
                <span class="no-fav-cocktail-color">favorite cocktails</span> yet
            </p>
        `,s.innerHTML="";i()}s.addEventListener("click",function(e){const a=e.target.id;switch(e.target.dataset.action){case"learnmore":u(a);break}});document.body.addEventListener("click",e=>{(e.target.name==="remove-cocktail"||e.target.name==="add-cocktail")&&n()});
