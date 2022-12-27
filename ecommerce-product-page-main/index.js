const myImages = [
    
]





const btns = document.querySelectorAll(".btn")
const displayOutput = document.querySelector(".display-output")
const cartBtn = document.querySelector(".cart-btn")
const cartNo = document.querySelector(".cart-no")
let count = 0
 btns.forEach( (btn) => {
    btn.addEventListener("click", (e) => {
        const key = e.currentTarget.classList
        if (key.contains("increase")) {
            count++
            displayOutput.textContent = count
        } else if (key.contains("decrease")) {
            count--
            displayOutput.textContent = count
        } else {
            count = 0
        }
    })
 })
 
 cartBtn.addEventListener("click", (btn) => {
        cartNo.textContent = count
 })