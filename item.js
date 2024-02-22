let searches = ['kindle', 'amazon echo show', 'playstation 4','coffee maker','pampers'];

function generateRandom(maxLimit = 5){
    let rand = Math.random() * maxLimit;
    console.log(rand); 
  
    rand = Math.floor(rand); 
  
    return rand;
  }
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
    async function itemFun() {
    console.log("start from item page");
    await sleep(2000);
    //try size dropdown
    try {
        var category = document.querySelector("#native_dropdown_selected_size_name")
        category.click() //click any category on page
        var dropSel = document.querySelector("#native_dropdown_selected_unit_count_2")
        dropSel.click()
    }catch (error){console.log(error)};

    //try count dropdown
    try {
        var category = document.querySelector("#native_dropdown_selected_unit_count")
        await sleep(2000);
        category.click() //dropdown select
        var dropSel = document.querySelector("#native_dropdown_selected_unit_count_1")
        dropSel.click()
    }catch (error){console.log(error)};

    try {
        var category = document.querySelector("#native_dropdown_selected_style_name")
        await sleep(2000);
        category.click() //dropdown select
        var dropSel = document.querySelector("#native_dropdown_selected_unit_count_1")
        dropSel.click()
    }catch (error){console.log(error)};


        
        await sleep(5000);
        var select = document.querySelectorAll(".a-button-input") // side pictures
        console.log("clickg random pics on side");
        await sleep(3000);
        for (let i = 0; i < 5; i++) {
          select[generateRandom(4)].click();
          await sleep(2000); 
        }
        window.scrollBy(0,3000);
        await sleep(3000);
        var helpfull = document.querySelector("#a-autoid-33-announce");
        await sleep(3000);
        helpfull.click();

        // input stuff
        var select = document.querySelector("#twotabsearchtextbox") //searching input
      //chosing which one to search in amazon
      console.log("Search Input found")
      select.value = "";
      let ser = searches[generateRandom(5)];
      for (let i = 0; i < ser.length; i++) {
        if (i == 3) {
            select.value += "x"
            await sleep(1500);
            select.value = "";
            for(let j=0;  j < i-1; j++){ 
            select.value +=ser[j]
            
            console.log(j);
            };
            select.value += ser[2];
        }

        if (i == 5) {
            select.value += "q"
            await sleep(1500);
            select.value = "";
            for(let j=0;  j < i-1; j++){ 
            select.value +=ser[j]
            
            console.log(j);
            };
            select.value += ser[4];
        }
        select.value += ser[i];
        await sleep(2000);
        console.log(ser[i]);
    }
    //search button
    await sleep(3000);
    var Sbutton = document.querySelector("#nav-search-submit-button");
    await sleep(2000);
    Sbutton.click();
    console.log("Done");
    //testing this part

   


    console.log("item page done");
    };

    itemFun();