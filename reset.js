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
async function resetPage() {
    console.log("reset");
    try {
        var category = document.querySelector(".ewc-delete-icon")
        category.click()
        
    } catch (error) {
        console.log(error)
    }


    try {
        var category = document.querySelector(".a-link-nav-icon")
        category.click()
        
    } catch (error) {
        console.log(error)
    }

try {
        //todaYDEALS explores
        var Deal = document.querySelector("#nav-xshop")
        await sleep(2000);
        var d = Deal.querySelector('a')
        await sleep(1000);
        d.click(); 
        await sleep(2000);
    
} catch (error) {
    console.log(error)
    
}
   
    
}

resetPage();
