let hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

const btn = document.querySelector(".btn")
const hexContainer = document.querySelector("#hex")
const colorHex = document.querySelector(".color-hex")
const rgbContainer = document.querySelector("#rgb")
const colRgb = document.querySelector(".color-rgb")
const containerRgba = document.querySelector("#rgba")
const colRgba = document.querySelector(".color-rgba")


function generateRandom () {
    return Math.floor (Math.random() * hex.length)
}

function generateRandomRgb() {
    return Math.floor(Math.random() * 255)
}
function generateRandomRgba() {
    return Math.floor(Math.random() * 255)
}

function generateArea() {
   let numb =  Math.random()
   return numb.toFixed(2) 
 }

btn.addEventListener("click", function(){
    let red = generateRandomRgb()
    let blue = generateRandomRgb()
    let green = generateRandomRgb()
    let alt = generateArea()
hexValue()
rgbValue(red,green,blue)
rgbaValue (red,green,blue,alt)

})

function hexValue () {
    let hexColor = "#"

for (let i =0; i < 6; i++) {
    hexColor += hex[ generateRandom(hex.length)]
}
hexContainer.style.backgroundColor = hexColor
colorHex.textContent = hexColor
}

 function rgbValue (red,blue,green) {

    const rgbColor = `rgb(${red}, ${green}, ${blue})`
    rgbContainer.style.backgroundColor = rgbColor
    colRgb.textContent = rgbColor
 }



 function rgbaValue (red,green,blue,alt) {
    const rgbColor = `rgb(${red}, ${green}, ${blue},${alt})`
    containerRgba.style.backgroundColor = rgbColor
    colRgba.textContent = rgbColor 
}