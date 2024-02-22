
let searches = ['kindle', 'amazon echo show', 'playstation 4','coffee maker','pampers'];
function generateRandom(maxLimit = 5){
    let rand = Math.random() * maxLimit;
    console.log(rand); 
  
    rand = Math.floor(rand); 
  
    return rand;
  }
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

async function cartt() {
    await sleep(3000);
    var dropSel = document.querySelector(".a-button-input");
    await sleep(3000);
    dropSel.click();

    try {
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
       
   } catch (error) {
       console.log(error)
   }
};
cartt();