let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0;
function increment() {
    count += 1
    countEl.textContent = count
    // console.log(count)
  
 }

//  increment();

 function save() {
    let saveCounter =  count + " - " 
    saveEl.textContent += saveCounter
    countEl.textContent = 0
    count = 0
 }
 