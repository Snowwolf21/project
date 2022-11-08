const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color")

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}

btn.addEventListener("click", function(){
    let randomNumber = getRandomNumber();
    color.textContent = colors[randomNumber]
    document.body.style.backgroundColor = colors[randomNumber]
})