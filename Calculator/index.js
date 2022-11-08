const calcDisplay = document.querySelector(".calc-display");
const btns = document.querySelectorAll("button");

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
    const key = e.target
    const action = e.target.classList
    const displayNum = calcDisplay.textContent
    const keyContent = key.textContent
    

     if(!action.contains("btn")){
        if (displayNum === "0") {
            calcDisplay.textContent = keyContent
        } else {
            calcDisplay.textContent = displayNum + keyContent
        }
     }
     if (action.contains("plus-minus") ||
          action.contains("percentage") ||
          action.contains("divide") ||
          action.contains("multiply") ||
          action.contains("subtract") ||
          action.contains("add") ) {
            console.log("operator key!!")
          }

     if (action.contains("decimal")) {
        calcDisplay.textContent = displayNum + "."
     }
     if(action.contains("clear")) {
        calcDisplay.textContent = 0
     }
     if (action.contains("calculate")) {
        console.log("calculate")
     }
    })
})


 