const errorImg = document.getElementById("error-img")
const btn = document.getElementById("input-btn")
const input = document.getElementById("input")
const message = document.querySelector(".message")
 input.placeholder = "Enter a valid email"
btn.addEventListener("click", function(){
     let messageDisplay = "Enter a valid email"
    if (input.value !== "example@gmail.com") {
        errorImg.style.visibility = "visible"
       input.value = ""
    } 
  
})