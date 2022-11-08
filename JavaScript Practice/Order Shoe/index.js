let errorEl = document.getElementById("error");

function purchase() {
    errorEl.textContent = "Something went wrong, please try again"
}


let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEl = document.getElementById("sum-el")
function add() {
    let addition = num1 + num2
    sumEl.textContent = "Sum: " + addition
    
}

function subtract() {
    let minus = num1 - num2
    sumEl.textContent = "Sum: " + minus

}

function divide() {
    let division = num1 / num2
    sumEl.textContent = "Sum: " + division
}

function multiply() {
    let multiplication = num1 * num2
    sumEl.textContent = "Sum: " + multiplication
}


