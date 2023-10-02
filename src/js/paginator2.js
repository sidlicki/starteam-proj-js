import {testArr} from './test/test-coctails';

export function paginator(cocList){
    const paginatorContainer = document.querySelector('.pagin-container');
    const pagesContainer = document.querySelector('.pages');
    console.log(cocList);
    let numberOfPhoto=8;
    let totalItems =cocList.length;
    let itemsPerPage = 5;
    let visiblePages = 3;
    
    
    
    const renderCards= (point4) => {
        if(point4<3){
            visiblePages=point4;
        }
        
            for (let i=0; i<visiblePages; i++){
                pagesContainer.insertAdjacentHTML('beforeend',`<a href="#" class="page-btn inside-container number-item inside-number">${i+1}</a>`)
                if (i===0){document.querySelector('.number-item').classList.add("selected-item")}
            }
        
    }

    let lastPage=6;

    // const renderNewCards = (i, numberPlus, maxItem) =>{
        
    //     if(i===3){
    //        console.log("enter");
    //         lastPage=6;
    //     } 
        
        
       
    //     let point3=i;
        
    //     if(lastPage===i){
    //         lastPage=lastPage+3;
    //     }
    //     if(lastPage<i){
    //         lastPage=numberPlus;
    //     }
    //     if(lastPage-i!==3){
    //         lastPage=i+3;
    //     }
        
    //     if (numberPlus<3) {
    //         lastPage=lastPage-(3-numberPlus);
    //         console.log("###");
    //     }

    //     console.log("");
    //     console.log("renderNewCards params");
    //     console.log(`i=${i}`);
    //     console.log(`numberPlus= ${numberPlus}`);
    //     console.log(`lastPage: ${lastPage}`);
    //     // console.log(lastPage-(3-numberPlus))
    //     console.log("");


    //     let j = 0;

    //     for (i; i<lastPage; i++){
            
    //         pagesContainer.insertAdjacentHTML('beforeend',`<a href="#" class="page-btn inside-container number-item inside-number">${i+1}</a>`);
    //         if (j===0){document.querySelector('.number-item').classList.add("selected-item")}
    //         j+=1;
    //     }

    //     if(numberPlus===1){
    //         lastPage=lastPage-1;
    //     }
    //     if(numberPlus===2){
    //         lastPage=lastPage-2;
    //     }
        
    //    console.log("i="+i); 
       
    //     if(i===maxItem){
    //         console.log("nea");
    //         console.log("#################################")
    //     }else{
            
    //         lastPage=lastPage+3;
    //         console.log("#################################")
    //     }


         
    // }


    const renderNewCardsRevers = (i, lastItem) =>{
        let h = 0;

            // console.log(`i= ${i}`);
            // console.log(`lastItem=  ${lastItem}`);

        for (i; i<lastItem; i++){
            
            pagesContainer.insertAdjacentHTML('beforeend',`<a href="#" class="page-btn inside-container number-item inside-number">${i+1}</a>`);
            // if (h===0){document.querySelector('.number-item').classList.add("selected-item")}
            // h+=1;
        }
        const insideNumberArr=Array.from(document.querySelectorAll(".inside-number"));
        insideNumberArr[insideNumberArr.length-1].classList.add("selected-item");
    }


    const renderLastItem=(i,lastsItemIndex)=>{
        console.log("iiii= "+i)
        console.log("lastItemIndex="+lastsItemIndex)
        const point9=i;
        let isClassLasteditem="lasted-item"
        for (i; i<lastsItemIndex; i++){
            if(lastsItemIndex-point9===1 || lastsItemIndex-point9===2){
                isClassLasteditem=""
            }
            pagesContainer.insertAdjacentHTML('beforeend',`<a href="#" class="page-btn inside-container number-item ${isClassLasteditem}">${i+1}</a>`)
            
        }
        
    }


    const renderDots = () => {
        pagesContainer.insertAdjacentHTML('beforeend',`<a href="#" class="page-btn inside-container dots-item">...</a>`)
    }

    const renderLastCard =()=>{
        pagesContainer.insertAdjacentHTML('beforeend',`<a href="#" class="page-btn inside-container number-item last-item">${Math.ceil(cocList.length/numberOfPhoto)}</a>`)
    }  


    const coctailsSetArr = () =>{
        let newArrCoctais = [];
        let numberOfPhotoJ=numberOfPhoto;
        let j = 0;
        for (let i=0; i<Math.ceil(cocList.length/numberOfPhoto); i++){
            newArrCoctais.push([]);
            for(j; j<numberOfPhotoJ; j++){
                if (cocList[j]===undefined){break}
                newArrCoctais[i].push(cocList[j])
            }
            numberOfPhotoJ+=numberOfPhoto;
        }
        return newArrCoctais;      
    }
    console.log(coctailsSetArr())

    function renderMarkupCoctails(direction, currentItemPaginator){
        const markup = coctailsSetArr()[currentItemPaginator-1].map((item) => {
            const { _id, drink, drinkThumb, description } = item;
              return `<li class="cocktail-list__cocktail-item">
                  <img class="cocktail-item_img" src="${drinkThumb}" alt="preview cocktail" width="316" height="auto">
                  <h2 class="cocktail-item__name">${drink}</h2>
                  <p class="cocktail-item__description">${description}</p>
                  <div class="button-wrap" data-id-drink='${_id}'>
                      <button type="button" class="cocktail-item__learn-more">Learn more</button>
                      <button type="button" class="cocktail-item__"></button>
                          <svg class="svg" width="21" height="19">
                              <use href=""></use>
                          </svg>
                      </button>
                  </div>
              </li>`;
            }).join("");
        
            document.querySelector('.search-cards').innerHTML= markup;
            // window.scroll(0,0)  
    } 
    //   renderMarkupCoctails("first" ,1);


     let yPosition=Math.floor(document.querySelector(".footer").getBoundingClientRect().top);
     let point5=0;
     



    const selectItem = (e) => {
// check       
        if(e.target===e.currentTarget){
            console.log("out area");
            return;
        }
        const insideNumberArr=Array.from(document.querySelectorAll(".inside-number"));
        let lastedItemsArr=Array.from(document.querySelectorAll(".lasted-item"));

        if(insideNumberArr[insideNumberArr.length-1].classList.contains("selected-item")){
            document.querySelector(".next-btn").style.pointerEvents = "auto";
        }

        
        
        const renderNewCards = (i, numberPlus, maxItem) =>{
            const selectedtBtn =document.querySelector(".ashka");
            console.log("selectedBtn=- "+selectedtBtn);
            let selectedValue;
            if (selectedtBtn===null) {
                selectedValue = "";
            }else{
                selectedValue = Number.isInteger(Number(selectedtBtn.textContent))? Number(selectedtBtn.textContent):"";
            }
            
           


            if(i===3){
               console.log("enter");
                lastPage=6;
            } 
            
            
           
            let point3=i;
            
            if(lastPage===i){
                lastPage=lastPage+3;
            }
            if(lastPage<i){
                lastPage=numberPlus;
            }
            if(lastPage-i!==3){
                lastPage=i+3;
            }
            
            if (numberPlus<3) {
                lastPage=lastPage-(3-numberPlus);
                console.log("###");
            }
    
            console.log("");
            console.log("renderNewCards params");
            console.log(`i=${i}`);
            console.log(`numberPlus= ${numberPlus}`);
            console.log(`lastPage: ${lastPage}`);
            // console.log(lastPage-(3-numberPlus))
            console.log("");
    
    
            let j = 0;
    
            for (i; i<lastPage; i++){
                
                pagesContainer.insertAdjacentHTML('beforeend',`<a href="#" class="page-btn inside-container number-item inside-number">${i+1}</a>`);
                // console.log(Number.isInteger(selectedValue));
                console.log("selectedValue="+selectedValue);
                const insideNumberArr=Array.from(document.querySelectorAll(".inside-number"));
                if (Number.isInteger(selectedValue)) {
                    console.log('i= '+i);
                    console.log(selectedValue-1);
                    if(i===selectedValue-1){
                        console.log("zaishlo");
                        console.log(insideNumberArr);
                        insideNumberArr[insideNumberArr.length-1].classList.add("selected-item");
                        // pagesContainer.textContent="";
                        
                    }
                } else {
                    if (j===0){document.querySelector('.number-item').classList.add("selected-item")}
                    j+=1;   
                }
                const arrDeleteClassLastItem=document.querySelectorAll(".page-btn");
                console.log(arrDeleteClassLastItem)
            }
    
            if(numberPlus===1){
                lastPage=lastPage-1;
            }
            if(numberPlus===2){
                lastPage=lastPage-2;
            }
            
           
           
            if(i===maxItem){
                console.log("nea");
                console.log("#################################")
            }else{
                
                lastPage=lastPage+3;
                console.log("#################################")
            }
    
    
             
        }



        const renderLastItemE=(i,lastsItemIndex)=>{
            console.log("iiii= "+i);
            console.log("lastItemIndex="+lastsItemIndex);

            const selectedtBtn =document.querySelector(".ashka");
            // console.log("selectedBtn=- "+selectedtBtn.textContent);
            let selectedValue;
            if (selectedtBtn===null) {
                selectedValue = "";
            }else{
                selectedValue = Number.isInteger(Number(selectedtBtn.textContent))? Number(selectedtBtn.textContent):"";
            }
            console.log("renderSelectedValue= "+selectedValue)

            const point9=i;
            let isClassLasteditem="lasted-item"
            let isClassSelectedItem;
            for (i; i<lastsItemIndex; i++){
                if(lastsItemIndex-point9===1 || lastsItemIndex-point9===2){
                    isClassLasteditem="not-lasted-item"
                }
                if(i+1===selectedValue){
                    isClassSelectedItem="selected-item"  
                }
                
                pagesContainer.insertAdjacentHTML('beforeend',`<a href="#" class="page-btn inside-container number-item ${isClassLasteditem} ${isClassSelectedItem}">${i+1}</a>`)
                
            }
            //  selectedtBtn.textContent="";
        }


//functions
    //next
        const nextItem = (indexInArr, selectedInfo) => {
           
            if(Math.ceil(cocList.length/numberOfPhoto)-Number(insideNumberArr[insideNumberArr.length-1].textContent)<=3){
                // document.querySelector(".next-btn").style.pointerEvents = "none"; 
            }
            
            if(Number(insideNumberArr[insideNumberArr.length-1].textContent)===Math.ceil(cocList.length/numberOfPhoto) && insideNumberArr[insideNumberArr.length-1].classList.contains("selected-item")){
                console.log("end");
                console.log("DISABLE NEXT BTN ")
                return;
            }

            if (indexInArr===3) {
                // console.log("виклик dots");
                // console.log(`indexInArr nextItem =${indexInArr}`);
                pagesContainer.innerHTML="";
                dots(); 

            } else{}
            
                let point2 =0;
                if(insideNumberArr[insideNumberArr.length-1].textContent===`${Math.ceil(cocList.length/numberOfPhoto)}` && 
                insideNumberArr[insideNumberArr.length-1].classList.contains("selected-item")){
                    document.querySelector(".next-btn").style.pointerEvents = "none";
                    point2=1;
                    console.log("afarfa")
                }

            if(Math.ceil(cocList.length/numberOfPhoto)-Number(insideNumberArr[insideNumberArr.length-1].textContent)>=0 && point2===0){
                arrItemPagination[indexInArr-1].classList.remove("selected-item");
                arrItemPagination[indexInArr].classList.add("selected-item");
                //  renderMarkupCoctails("next", selectedInfo+1);
            }
        }       

    //prev
       function prevItem(indexInArr, selectedInfo){
        // console.log("indexInArr= "+indexInArr);
        // console.log("selectedInfo= "+selectedInfo);
        if (indexInArr===0 && selectedInfo!==1) {
            // console.log("start dotsRevers from prevItem");
            dotsRevers(); 
        } else{
                console.log("move selected item");
                if (arrItemPagination[0].classList.contains('selected-item') && Number(arrItemPagination[0].textContent)===1) {
                    console.log("DISABLE PREV BTN ")
                }else{
                (arrItemPagination[indexInArr]);
                (arrItemPagination[indexInArr-1]);
                arrItemPagination[indexInArr].classList.remove("selected-item");
                arrItemPagination[indexInArr-1].classList.add("selected-item");
                //  renderMarkupCoctails("back", selectedInfo-1);
            }
                 
            
        }

        
       } 


    //dots
        
        function dots(){
            
            let numberPlus=3
            let point;
            
            
                // console.log(e.target.previousSibling);
                
                
                if(Math.ceil(cocList.length/numberOfPhoto)-Number(insideNumberArr[2].textContent)===3){
                    console.log("різниця = 3");
                    // lastedItemsArr[0].style.display="none";
                    // lastedItemsArr[1].style.display="none";
                    point5=0;
                }

                if(Math.ceil(cocList.length/numberOfPhoto)-Number(insideNumberArr[2].textContent)===4){
                    console.log("різниця = 4");
                    // lastedItemsArr[0].style.display="none";
                    // lastedItemsArr[1].style.display="none";
                    point5=1;
                }
                if(Math.ceil(cocList.length/numberOfPhoto)-Number(insideNumberArr[2].textContent)===5){
                    console.log("різниця = 5");
                    // lastedItemsArr[0].style.display="none";
                    // lastedItemsArr[1].style.display="none";
                    point5=2;
                }
            
           
             
            if(Math.ceil(cocList.length/numberOfPhoto)-Number(arrItemPagination[2].textContent)<=3){
                numberPlus=Math.ceil(cocList.length/numberOfPhoto)-Number(arrItemPagination[2].textContent)
                
                arrItemPagination[3].remove();
                arrItemPagination[4].remove();
                pagesContainer.textContent="";
                renderNewCards(Number(arrItemPagination[2].textContent), numberPlus, Math.ceil(cocList.length/numberOfPhoto));
                // console.log("not ok");
            }
            else{
                
                
                

                
             pagesContainer.innerHTML="";
                renderNewCards(Number(arrItemPagination[2].textContent), numberPlus, Math.ceil(cocList.length/numberOfPhoto));
                if(Math.ceil(cocList.length/numberOfPhoto)<=3){

                }else{
                renderDots();
                if(window.innerWidth<768)
                    {renderLastCard();}
                    
                }

                if(window.innerWidth>=768){
                    
                    let minusValue;
                    
                    if(point5===0){
                        minusValue=3
                    }else{minusValue=point5}
                    renderLastItemE(Math.ceil(cocList.length/numberOfPhoto)-minusValue, Math.ceil(cocList.length/numberOfPhoto));
                    
                }


                


            }

            
            
     }



    //dotsRevers
        function dotsRevers(){
            let lastedItemsArr=Array.from(document.querySelectorAll(".lasted-item"));
            if(arrItemPagination[0].classList.contains("selected-item") && arrItemPagination[0].textContent==='1'
            //    arrItemPagination[1].classList.contains("selected-item") && arrItemPagination[0].textContent==='2'||
            //    arrItemPagination[2].classList.contains("selected-item") && arrItemPagination[0].textContent==='3'
            )
               {
                console.log("наразі 1 2 3");
                document.querySelector(".prev-btn").style.pointerEvents = "none"; 
            }
            else{ 
            // console.log('гуд проийшлт перевірку на 1 2 3');
            pagesContainer.innerHTML="";
            
            renderNewCardsRevers(Number(arrItemPagination[0].textContent)-4,Number(arrItemPagination[0].textContent)-1);
            
            if(Math.ceil(cocList.length/numberOfPhoto)<=3){

            }else{
            renderDots();
            
            if(window.innerWidth<768)
                    {renderLastCard();
                        }
                }

                if(window.innerWidth>=768){
                    console.log("rev point5="+point5);
                    let minusValue;
                    if(point5===0){
                        minusValue=3
                    }else{minusValue=point5}
                    renderLastItemE(Math.ceil(cocList.length/numberOfPhoto)-minusValue, Math.ceil(cocList.length/numberOfPhoto));
                    
                    point5=0
                }
        }
        // let notLastedItemsArr=Array.from(document.querySelectorAll(".not-lasted-item"));
        //        console.log(notLastedItemsArr)
        //     if(notLastedItemsArr[0].classList.contains("selected-item")){
        //         notLastedItemsArr[0].classList.remove("selected-item")
        //     }

            
        }
    
    

    //renderCard
        
        
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////


        const psvArrItemPagination = document.querySelectorAll('.inside-container');
        const arrItemPagination = Array.from(psvArrItemPagination);
        
        if(e.target.classList.contains("number-item") && e.target.classList.contains("selected-item")===false){
            //  renderMarkupCoctails("no direction", Number(e.target.textContent));
            
        }



// dots
        if (e.target.classList.contains("dots-item")) {
            
        dots();
        
        }


// numbers
        if(e.target.classList.contains("number-item")){
            const selectedItem = arrItemPagination.find(item =>{
                if (item.classList.contains("selected-item")){
                    return item;
                }
            }) 
            if(selectedItem===undefined){
                e.target.classList.add("selected-item");
            }else{
                selectedItem.classList.remove("selected-item");
                e.target.classList.add("selected-item");        
            }
           
        }

        // console.log(e.target.classList.contains("selected-item"));
        

// next 
        if(e.target.classList.contains("next-btn")){
            
            nextItem(arrItemPagination.indexOf(document.querySelector(".selected-item"))+1, Number(arrItemPagination[arrItemPagination.indexOf(document.querySelector(".selected-item"))].textContent));
           

        }        
// prev        
        if(e.target.classList.contains("prev-btn")){
            
            prevItem(arrItemPagination.indexOf(document.querySelector(".selected-item")), Number(arrItemPagination[arrItemPagination.indexOf(document.querySelector(".selected-item"))].textContent))
           

        } 
        
// dots prev
        if(e.target.classList.contains("prev-dots")){
           console.log("тик по перших дотс");
            dotsRevers();
            
            window.scroll(100,100);

        }        

// last 
        if (e.target.classList.contains("last-item")) {
            let numb = Math.ceil(cocList.length/numberOfPhoto)%3;
            if(Math.ceil(cocList.length/numberOfPhoto)%3===0){numb=3}
            pagesContainer.innerHTML="";
            renderNewCardsRevers(Math.ceil(cocList.length/numberOfPhoto)-numb,Math.ceil(cocList.length/numberOfPhoto))

            
}

// lasts
        
        if(e.target.classList.contains("lasted-item")){
            if(Number(e.target.textContent)===Math.ceil(cocList.length/numberOfPhoto)||
               Number(e.target.textContent)===Math.ceil(cocList.length/numberOfPhoto)-1||
               Number(e.target.textContent)===Math.ceil(cocList.length/numberOfPhoto)-2)
               {
                const completeRepetitions=Math.ceil(Math.ceil(cocList.length/numberOfPhoto)/3)-1;
                
                let point6;
                let point7 = parseFloat(Math.ceil(cocList.length/numberOfPhoto)/3).toString().split('.')[1];
                    
                point7 = point7===undefined ? 0 : Number(point7[0]);
                
                if(point7===3){
                    point6=1
                }
                    
                if(point7===6){
                    point6=1
                }

                if(point7===0){
                    point6=0;
                }
                
                const currentClickItem=e.target;
                let numberArr=[];
                for(let i = 0; i<completeRepetitions+1; i++){
                    numberArr.push(i);
                }
                console.log("numbArr= "+numberArr);

                // async function asinhFunc(){
                //     await dots();
                //     console.log("done")
                // }
                // asinhFunc();
                let point8;
                if(e.target.classList.contains("lasted-item")){
                    

                    console.log(e.target.textContent)
                    const a = `<p class="ashka" style="">${Number(e.target.textContent)}</p>`
                    paginatorContainer.insertAdjacentHTML("beforeend",a);
                    console.log(a)
                    
                }

                
                
                for(let i=0; i<completeRepetitions-point6;i++){
                    
                    document.querySelector(".dots-item").click();
                }

                console.log(currentClickItem);
                console.log(lastedItemsArr);
                
            }


        }




        // if (e.target.classList.contains("to-down")) {
        //     const heightEl=Math.floor(e.target.getBoundingClientRect().y)
    
   
        //         window.scroll(0,yPosition);
        //         console.log("scrol yepyy");
    
        // }
        if(document.querySelector(".dots-item")!==null && document.querySelector(".dots-item").classList.contains("selected-item")){
            document.querySelector(".dots-item").classList.remove("selected-item")
            document.querySelector(".dots-item").previousSibling.classList.add("selected-item");
        }
    }


    if (Math.ceil(cocList.length/numberOfPhoto)<3) {
        renderCards(Math.ceil(cocList.length/numberOfPhoto));
    }else{
       renderCards(); 
    }

    if( Math.ceil(cocList.length/numberOfPhoto)<=3){

    }else{
        renderDots();
        if(window.innerWidth<768)
        {renderLastCard();}
    }

    if (window.innerWidth>=768) {
        renderLastItem(Math.ceil(cocList.length/numberOfPhoto)-3, Math.ceil(cocList.length/numberOfPhoto))
    }

    paginatorContainer.addEventListener('click', selectItem)
}
paginator(testArr);
