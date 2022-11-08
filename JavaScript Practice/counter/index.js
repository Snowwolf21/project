let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    count++
    countEl.textContent = count
}

function save() {
    let saver = count + " - "
    saveEl.textContent += saver
    countEl.textContent = 0
    count = 0
}


/*
function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }

  setUserName();
  */