//document.getElementById("counter-el").innerText =23 ;//

//  let myAge = 28
//  let humanDogRatio = 4

//  let myDogAge = myAge + humanDogRatio
//  //let myDogAge = myAge * humanDogRatio
//  //let myDogAge = myAge / humanDogRatio



//  console.log(myDogAge);


// let myAge = 10

// myAge = 15
// myAge = 5
// console.log(myAge);


// let bonusPoints = 50

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

//   function increment() {
//       console.log("Keep learning")
//   }


// function countdwon() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// // start of the first race//
// countdwon()

// // start of the second race//
// countdwon()

/*  function lessonJs() {
     console.log(42)
 }

lessonJs() */

/* let lap1 = 34
 let lap2 = 33
 let lap3 = 36

function total(){
   let totaltime =  lap1 + lap2 + lap3
    console.log(totaltime)
 }


 total(); */



/* let lapsCompleted = 0

function totalLaps() {
  lapsCompleted = lapsCompleted + 1
}

totalLaps()

 totalLaps()

 totalLaps()
console.log(lapsCompleted)
*/




/* let CountEl = document.getElementById("counter-el")
 console.log(CountEl)

let count = 0 

function increment() {
    count = count + 1
    CountEl.innerText = count
    
}
*/
  
   
//     let CountEl = document.getElementById("counter-el")
//     let count = 0

//     function increment() {
//         count = count + 1
//         CountEl.innerText = count
        
//  }


// function save() {
//     console.log(count)
// } 
  


/* String tutorial and examples her */


// let message = "You have three new notifications"

// console.log(message)


    // let username = "peer"

    // let pass = "group" 


    // let messageToUser = username + ", " + pass

    // console.log(messageToUser)


    // let myName = "Akinkunmi"
    // let greeting = "Hi, my name is "

    // let myGreeting = greeting + myName
    
    // console.log(myGreeting)

//  let welcomeEl = document.getElementById("welcome-el")
//  console.log(welcomeEl)
    
//  let name = "Akinkunmi"
//  let greeting = "Hello world!, I'm "

//  welcomeEl.innerText = greeting + name 
         
//         console.log(  welcomeEl.innerText)

// let saveEl = document.getElementById("save-el")
// let CountEl = document.getElementById("counter-el")
// let count = 0


// function increment() {
//     count += 1
//     CountEl.textContent = count
// }


// function save() {
//       let countPng = count + "-"
//       saveEl.textContent += countPng
//       CountEl.innerText = 0
//       count = 0
// }

// let firstName =" Akinbade "
// let lastName = "Akinkunmi"
// let fullName = firstName +  lastName

// console.log (fullName)

 let person = {
     name: "Akinkunmi",
     age:"29",
     discipline:"Mechanical Eng"
 }

  let logData = () => console.log(person.name)

  logData();


  let age = 15;
  if (age < 6) {
      console.log("Free Pass!!")
  } else if ( age < 17) {
      console.log("child discount");
  } else if (age < 26) {
      console.log("student discount")
  } else if (age < 66) {
      console.log("full price")
  } else {
      console.log("senior citizen discount")
  }

  let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];
  for (let i = 0; i < largeCountries.length; i++) {
      console.log(largeCountries[i])
  }


  let largeCountry = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]
    let firstCountry = largeCountry.pop()
    let lastCountry = largeCountry.shift()
   let replaceFirstCountry = largeCountry.push("China")
  let replaceSecondCountry = largeCountry.unshift("Pakistan")
    console.log(largeCountry)


    let dayOfMonth = 13;
    let weekDay = "Friday";
         if (dayOfMonth === 13 && weekDay === "Friday") {
             console.log("Here is the day")
         }

        let hands = ["rock", "paper", "scissors"]

        function games() {
            let randomIndex = Math.floor(Math.random() * 3);
            return hands[randomIndex]
        }

        console.log(games());


        let fruit = ["apple", "orange", "apple", "apple", "orange"]
        let appleShelf = document.getElementById("apple-shelf")
        let orangeShelf = document.getElementById("orange-shelf")

        function sortFruit() {
            for (i = 0; i < fruit.length; i++) {
                if (fruit[i] === "apple") {
                    appleShelf.textContent += "apple"
                } else {
                    orangeShelf.textContent += "orange"
                }

            }
        }

       // sortFruit();


      


        let myLead = ["whoops!"]
        const inputEl = document.getElementById("input-el")
        const btnEl = document.getElementById("btn-el")
        const ulEl = document.getElementById("ul-el");

        btnEl.addEventListener("click", function() {
            myLead.push(inputEl.value)
            inputEl.value = ""
            renderLeads()
        })
       

        function renderLeads() {
            let listItems = "" 
            for (let i = 0; i < myLead.length; i++) {
              //  ulEl.innerHTML += "<li>" + myLead[i] + "</li>"
            //   const li = document.createElement("li")
            //   li.textContent = myLead[i]
            //   ulEl.append[li]
          //  listItems += "<li><a  target= '_blank' href='" + myLead[i] + "'>" + myLead[i] + "</a></li>"
                listItems += `
                <li>
                    <a target='_blank' href='${myLead[i]}'>
                    ${myLead[i]}
                    </a> 
                </li>`
            }
    
            ulEl.innerHTML = listItems
    
        }
      

        const recipent = "James"
        let sender = "Akinkunmi"
        const email = `Hey ${recipent}! 
                        How is it going? Cheers
                         ${sender}`

        console.log(email)


        