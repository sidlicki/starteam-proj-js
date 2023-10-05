import{f as l,n as r,a as d,o as u,b as m}from"./main-start-6a79ef26.js";import{p as f,n as p,a as v}from"./coctail@2x-eb2020ac.js";const s=document.querySelector(".fav-cocktail-list"),o=document.querySelector(".not-found");document.addEventListener("DOMContentLoaded",n);function c(){const t=document.querySelectorAll(".remove-favorite");t.forEach(e=>{e.addEventListener("click",()=>{let a;const i=e.id;m(i),document.querySelector(".tui-pagination").classList.contains("visually-hidden")===!1&&t.length!==0&&(a=Number(document.querySelector(".tui-is-selected").textContent),t.length===1&&(a=Number(document.querySelector(".tui-is-selected").textContent),a=a-1)),n(a)})})}function k(t){t.target!==t.currentTarget&&c()}async function n(t){const e=JSON.parse(localStorage.getItem("favoriteCocktails"))||[];if(e.length>0){o.classList.add("is-hidden");const a=await l(e.map(i=>i));f(a,"byfavoriteCoctails","fav-cocktail-list",6,t),c(),document.querySelector(".tui-pagination").addEventListener("click",k),o.innerHTML=""}else document.querySelector(".tui-pagination").classList.add("visually-hidden"),o.classList.remove("is-hidden"),o.innerHTML=`
            <picture>
                <!-- TABLET -->
                <source srcset="${p} 1x, ${v} 2x" type="image/webp" media="(min-width: 768px)">
                <!-- MOBILE -->
                <source srcset="${r} 1x, ${d} 2x" type="image/webp" media="(min-width: 320px)">
                <img class="no-fav-cocktail-img" src="${r}" alt="cocktail">
            </picture>
            <p class="no-fav-cocktail-text">
                You haven't added any
                <span class="no-fav-cocktail-color">favorite cocktails</span> yet
            </p>
        `,s.innerHTML="";c()}s.addEventListener("click",function(t){const e=t.target.id;switch(t.target.dataset.action){case"learnmore":u(e);break}});document.body.addEventListener("click",t=>{(t.target.name==="remove-cocktail"||t.target.name==="add-cocktail")&&n()});
