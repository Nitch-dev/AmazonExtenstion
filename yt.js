// Wait for the entire page to load
function generateRandom(maxLimit = 5){
    let rand = Math.random() * maxLimit;
    console.log(rand); 
  
    rand = Math.floor(rand); 
  
    return rand;
  }
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function main() {
    console.log("Start");
    var number = generateRandom(5);
    await sleep(3000); // Sleep for 2 seconds
    var elements = document.querySelectorAll(".a-offscreen");
    console.log(elements);
    await sleep(2000);
    window.scrollBy(0,500);
    await sleep(5000);
    try {
         elements[number].click(); //clcik any elemnt in search menu
        console.log();
        } catch (error) {
          console.log(error);
        };
    console.log("Done");
   
  }
main();
