import{f as d,n as r,a as u,o as m,b as p}from"./main-start-9f04b1ff.js";import{p as f,n as v,a as k}from"./coctail@2x-025310d2.js";const l=document.querySelector(".fav-cocktail-list"),o=document.querySelector(".not-found"),s=document.querySelector(".wrapper-loader-fav-cocktails");document.addEventListener("DOMContentLoaded",()=>{s.classList.remove("is-hidden");try{n()}catch{}finally{s.classList.add("is-hidden")}});function c(){const e=document.querySelectorAll(".remove-favorite");e.forEach(t=>{t.addEventListener("click",()=>{let a;const i=t.id;p(i),document.querySelector(".tui-pagination").classList.contains("visually-hidden")===!1&&e.length!==0&&(a=Number(document.querySelector(".tui-is-selected").textContent),e.length===1&&(a=Number(document.querySelector(".tui-is-selected").textContent),a=a-1)),n(a)})})}function g(e){e.target!==e.currentTarget&&c()}async function n(e){const t=JSON.parse(localStorage.getItem("favoriteCocktails"))||[];if(t.length>0){o.classList.add("is-hidden");const a=await d(t.map(i=>i));f(a,"byfavoriteCoctails","fav-cocktail-list",6,e),c(),document.querySelector(".tui-pagination").addEventListener("click",g),o.innerHTML=""}else document.querySelector(".tui-pagination").classList.add("visually-hidden"),o.classList.remove("is-hidden"),o.innerHTML=`
            <picture>
                <!-- TABLET -->
                <source srcset="${v} 1x, ${k} 2x" type="image/webp" media="(min-width: 768px)">
                <!-- MOBILE -->
                <source srcset="${r} 1x, ${u} 2x" type="image/webp" media="(min-width: 320px)">
                <img class="no-fav-cocktail-img" src="${r}" alt="cocktail">
            </picture>
            <p class="no-fav-cocktail-text">
                You haven't added any
                <span class="no-fav-cocktail-color">favorite cocktails</span> yet
            </p>
        `,l.innerHTML="";c()}l.addEventListener("click",function(e){const t=e.target.id;switch(e.target.dataset.action){case"learnmore":m(t);break}});document.body.addEventListener("click",e=>{(e.target.name==="remove-cocktail"||e.target.name==="add-cocktail")&&n()});
