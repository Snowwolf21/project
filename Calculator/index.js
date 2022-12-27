const container = document.querySelector(".container")
const calculator = container.querySelector(".calculator")
const calcDisplay = document.querySelector(".calc-display")
calculator.addEventListener("click", e => {
 if(e.target.matches("button")) {
         const key = e.target
         const action = key.dataset.action
         const displayNumb = calcDisplay.textContent
         const keyContent = key.textContent
         const previousKeyType = container.dataset.previousKeyType
        
      
         if (!action) {
               //  console.log("number key!")
               if (displayNumb === "0" || previousKeyType === "operator") {
                  calcDisplay.textContent = keyContent
               } else {
                  calcDisplay.textContent = displayNumb + keyContent
               }
               calculator.dataset.previousKey = "number"
         }
         if (action ==="plus-minus" ||
              action === "percentage" ||
              action === "divide" ||
              action === "multiplication" ||
              action === "subtraction" ||
              action === "add") {
                  //  console.log("operator key!!")
                   key.classList.add("is-depressed")
                     Array.from(key.parentNode.children)
                     .forEach(k => k.classList.remove("is-depressed"))
                     calculator.dataset.firstValue = displayNumb
                     calculator.dataset.operator = action
                     
              }
         if (action === "decimal") {
            if(!displayNumb.includes(".")) {
               calcDisplay.textContent = displayNumb + "."
            } else if (prevKeyType === "operator") {
               calcDisplay.textContent = "0."
            }
            calculator.dataset.previousKeyType = "decimal"
         }
         if (action === "clear") {
                    console.log("clear")
                  calcDisplay.textContent = 0
         } 
         if (action === "calculate") {
                    console.log("equal key!!")
                    const firstValue = calculator.dataset.firstValue
                    const operator = calculator.dataset.operator
                    const secondValue = displayNumb
                   calcDisplay.textContent = calculate(firstValue,operator,secondValue)

         }
      }
        
})



const calculate = (n1,operator,n2) => {
   let result = ""
   if (operator === "add") {
        result = parseFloat(n1) + parseFloat(n2) 
    } else if (operator === "subtraction") {
      result = parseFloat(n1) - parseFloat(n2)
    } else if (operator === "multiplication") {
      result = parseFloat(n1) * parseFloat(n2)
    } else if (operator === "divide") {
      result = parseFloat(n1) / parseFloat(n2)
    } else if (operator === "percentage") {
      result /= 100
    }
      return result
}