const calcDisplay = document.querySelector('.calc-display')
const btns = document.querySelectorAll('button')
const calculator = document.querySelector('.calculator')
btns.forEach(function(btn){
   btn.addEventListener('click', function(e){
      const key = e.target
      const action = key.dataset.action
      const keyContent = key.textContent
      const displayNum = calcDisplay.textContent
      const previousKeyType = calculator.dataset.previousKeyType
      if (!action) {
         if (displayNum ==='0' || 
         previousKeyType === 'operator'){
            calcDisplay.textContent = keyContent
         } else {
            calcDisplay.textContent = displayNum + keyContent
         }
         
      }
     
      if (
         action === 'add' ||
         action === 'subtraction' ||
         action === 'plus-minus' ||
         action === 'multiplication' ||
         action === 'subtraction' ||
         action === 'divide' ||
         action === 'percentage'
      ) {
         key.classList.add('is-depressed')
         Array.from(key.parentNode.children)
            .forEach(k => 
               k.classList.remove('is-depressed'))
         // console.log('operator-key!!')
            }
      if (action === 'decimal') {
         calcDisplay.textContent = displayNum + '.'
      }
      if (action === 'clear') {
         calcDisplay.textContent = '0'
      }
      if (action === 'calculate') {
         const secondValue = displayNum
         console.log('calculate number')
      }
   })
})
































































































// const calcDisplay = document.querySelector(".calc-display");
// const btns = document.querySelectorAll("button");

// btns.forEach(function(btn){
//     btn.addEventListener("click", function(e){
//     const key = e.target
//     const action = key.classList
//     const displayNum = calcDisplay.textContent
//     const keyContent = key.textContent
//     const previousKeyType = action.previousKeyType

//      if(!action.contains("btn")){
//         if (displayNum === "0" || previousKeyType === 'operator') {
//             calcDisplay.textContent = keyContent
//         } else {
//             calcDisplay.textContent = displayNum + keyContent
//         }
//      }
//      if (action.contains("plus-minus") ||
//           action.contains("percentage") ||
//           action.contains("divide") ||
//           action.contains("multiply") ||
//           action.contains("subtract") ||
//           action.contains("add") ) {
//             action.add('is-depressed')
//             Array.from(key.parentNode.children).forEach(function(k){
//                k.classList.remove('is-depressed')

            
//             })
//             console.log("operator key!!")
//           }

//      if (action.contains("decimal")) {
//         calcDisplay.textContent = displayNum + "."
//      }
//      if(action.contains("clear")) {
//         calcDisplay.textContent = 0
//      }
//      if (action.contains("calculate")) {
//       const secondValue = displayNum
//         console.log("calculate")
//      }
//     })
// })


 