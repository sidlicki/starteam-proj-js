// "axios"/ "modern-normalize" /"notiflix" /"tui-pagination" - вже встановлено
// console.log('hello');
import Pagination from 'tui-pagination'; 
import {testArr} from './test/test-coctails'
import 'tui-pagination/dist/tui-pagination.css';

// console.log(testArr);

export function pagiation(cocList){
    const container = document.getElementById('tui-pagination-container');
    const numberOfPhoto = 8;
    const maxNumberOfPaginator = 3;
   

    const createNewArr= () =>{
        let newArr = [];
        let numberOfPhotoJ=numberOfPhoto;
        let j = 0;
        for (let i=0; i<Math.ceil(cocList.length/numberOfPhoto); i++){
            newArr.push([]);
            for(j; j<numberOfPhotoJ; j++){
                if (cocList[j]===undefined){break}
                newArr[i].push(cocList[j])
            }
            numberOfPhotoJ+=numberOfPhoto;
        }
        return newArr;      
    }

    // console.log(createNewArr());

    const renderCards = (currentItemPaginator) =>{
        //// console.log(currentItemPaginator);
        //// console.log(createNewArr()[currentItemPaginator]);
        //// console.log("");

        
    //         const markup = createNewArr()[currentItemPaginator].map((item) => {
    //         const { _id, drink, drinkThumb, description } = item;
    //           return `<li class="cocktail-list__cocktail-item">
    //               <img class="cocktail-item_img" src="${drinkThumb}" alt="preview cocktail" width="316" height="auto">
    //               <h2 class="cocktail-item__name">${drink}</h2>
    //               <p class="cocktail-item__description">${description}</p>
    //               <div class="button-wrap" data-id-drink='${_id}'>
    //                   <button type="button" class="cocktail-item__learn-more">Learn more</button>
    //                   <button type="button" class="cocktail-item__"></button>
    //                       <svg class="svg" width="21" height="19">
    //                           <use href=""></use>
    //                       </svg>
    //                   </button>
    //               </div>
    //           </li>`;
    //         }).join("");
        
    //         document.querySelector('.search-cards').innerHTML= markup;
    //         window.scroll(0,0)
    }
    renderCards(0);

    const instance = new Pagination(container, {
        totalItems: cocList.length,
        itemsPerPage: numberOfPhoto,
        visiblePages: maxNumberOfPaginator,
        firstItemClassName: 'tui-first-dots',
        lastItemClassName: 'tui-last-dots',
    }).getCurrentPage();
    
    
    if (Math.ceil(cocList.length/numberOfPhoto) < maxNumberOfPaginator) {
        document.querySelector('.last-item').classList.add("dpn");
    }


    // console.log(cocList.length);
    const psvArrItemPagination = container.querySelectorAll('.tui-page-btn');
    const arrItemPagination = Array.from(psvArrItemPagination);
    arrItemPagination[5].insertAdjacentHTML('afterend',`<a href="#" class="tui-page-btn last-item">${Math.ceil(cocList.length/numberOfPhoto)}</a> ` );
        
        

       

    const renerAditionalBtn = (e)=>{
        if (Number.isInteger(Number(e.target.textContent))){
            renderCards(Number(e.target.textContent)-1);
        }

        if (Math.ceil(cocList.length/numberOfPhoto) < maxNumberOfPaginator) {
            document.querySelector('.last-item').classList.add("dpn");
        }
        
        
        
        const psvArrItemPagination = container.querySelectorAll('.tui-page-btn');
        const arrItemPagination = Array.from(psvArrItemPagination);
        const lastDotsEl = arrItemPagination.find(item =>{
            if (item.classList.contains("tui-next-is-ellip")){
                // console.log("last")
                return item;
            }
        })
        const firstDotsEl = arrItemPagination.find(item=>{
            if (item.classList.contains("tui-prev-is-ellip")){
                // console.log("first")
                return item;
            }
        })
        
        if (e.target.classList.contains("tui-prev") || e.target.classList.contains("tui-ico-prev")){
            // console.log("1");
            renderCards(Number(document.querySelector('.tui-is-selected').textContent)-1);
            
            
            
        }
        
        if ( e.target.classList.contains("tui-next") || e.target.classList.contains("tui-ico-next") ){
            // console.log("2")
            renderCards(Number(document.querySelector('.tui-is-selected').textContent)-1);
            
        }

        if (e.target===e.currentTarget || lastDotsEl.nextSibling.classList.contains("tui-next")===false){
            console.log("out button")
            return;
        }
        
        

        

        lastDotsEl.insertAdjacentHTML('afterend',`<a href="#" class="tui-page-btn last-item">${Math.ceil(cocList.length/numberOfPhoto)}</a> ` );
    }


    container.addEventListener("click", renerAditionalBtn)

}
pagiation(testArr)