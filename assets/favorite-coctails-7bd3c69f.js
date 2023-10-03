import{f as s,n as i,a as r,o as l,b as d}from"./add-remove-favorite-ebd511dd.js";import{p as m,n as p,a as u}from"./coctail@2x-9c2d7848.js";const n=document.querySelector(".fav-cocktail-list"),a=document.querySelector(".not-found");document.addEventListener("DOMContentLoaded",c);function v(){document.querySelectorAll(".remove-favorite").forEach(e=>{e.addEventListener("click",()=>{const o=e.id;d(o),c()})})}async function c(){const t=JSON.parse(localStorage.getItem("favoriteCocktails"))||[];if(t.length>0){a.classList.add("is-hidden");const e=await s(t.map(o=>o));console.log(e),m(e,"byfavoriteCoctails","fav-cocktail-list",6),a.innerHTML=""}else document.querySelector(".tui-pagination").innerHTML="",a.classList.remove("is-hidden"),a.innerHTML=`
            <picture>
                <!-- TABLET -->
                <source srcset="${p} 1x, ${u} 2x" type="image/webp" media="(min-width: 768px)">
                <!-- MOBILE -->
                <source srcset="${i} 1x, ${r} 2x" type="image/webp" media="(min-width: 320px)">
                <img class="no-fav-cocktail-img" src="${i}" alt="cocktail">
            </picture>
            <p class="no-fav-cocktail-text">
                You haven't added any
                <span class="no-fav-cocktail-color">favorite cocktails</span> yet
            </p>
        `,n.innerHTML="";v()}n.addEventListener("click",function(t){const e=t.target.id;switch(t.target.dataset.action){case"learnmore":l(e);break}});document.body.addEventListener("click",t=>{(t.target.name==="remove-cocktail"||t.target.name==="add-cocktail")&&c()});
