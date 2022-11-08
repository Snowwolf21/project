let myLeads = [];
let  inputEl = document.getElementById("input-el");
let inputBtn = document.getElementById("input-btn");
let deleteBtn = document.getElementById("delete-btn");
let ulEl = document.getElementById("ul-el");
let tabBtn = document.getElementById("save-tab");
let leadsFromLocalStorage = JSON.parse(localStorage.getItem(myLeads))

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads)
 }

 function render(leads) {
  let listItems = ""
  for(let i=0;  leads.length; i++) {
    listItems += `
    <li>
    <a href='${leads[i]}'> ${leads[i]} </a>
    </li>
    ` 
   
  }
  ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads);
})

deleteBtn.addEventListener("dblclick", function(){
  myLeads =[];
  localStorage.clear();
  render(myLeads)
})


tabBtn.addEventListener("click", function() {
  chrome.tabs.query({ active: true, currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
  })
})

function generateSentence(desc, arr) {
  let message = `The ${arr.length} ${desc} are `
  let lastIndex = arr.length - 1;
  for (let i =0; i < arr.length; i++) {
    if(i === lastIndex) {
      message += arr[i];
    } else {
      message += arr[i] + ", "
    }
  }
  return message;
}

let sentence = generateSentence("best movies", ["Blacklist", "Peaky Order", "Prison Break"]);
console.log(sentence);


