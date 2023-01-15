const toggleBtn = document.querySelector(".toggle-btn");
const monthlyPrice = document.querySelectorAll(".monthly-price");
const annualPrice = document.querySelectorAll(".annual-price");



toggleBtn.addEventListener("click", () => {
    // console.log("Hello")
    toggleBtn.classList.toggle("show-monthly");
   if (toggleBtn.classList.contains("show-monthly")) {
        monthlyPrice.forEach((price) => {
            price.style.display = "block"
        })
        annualPrice.forEach((price) => {
            price.style.display = "none"
   
        })
    } else {
        monthlyPrice.forEach((price) => {
            price.style.display = "none"
        })
        annualPrice.forEach((price) => {
            price.style.display = "block"
   
        })
    }
        
})