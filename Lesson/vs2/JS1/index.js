let ourArray = [50,60,70];
let myData = ourArray[2];
console.log(myData)

let thatData = [["Akinkunmi", 3], ["Adeyinka", 5], ["Atanda", 5,["Stud", 6]]];
console.log(thatData);
let thoseData = thatData[2][2][0];
console.log(thoseData)

let addArray = ["Akinkunmi", "A", "Dog"];
addArray.push("happy", "joy");
console.log(addArray);

let plusArray = [["HTML", "CSS", "JS"], ["MYSQL","Node.js", "Python"] ]
console.log(plusArray);
plusArray.push(["Swift", "Flutter", "Ubuntu"])


let goArray = [1,2,3,4,5]
removeFromArray = goArray.shift();
console.log(removeFromArray);
console.log(goArray)


/* 
 Push is use to add element to an arrray
 pop is use to remove element from an array
 Shift is use to remove the first element of an array
 Unshift is use to add first element of an array.
 */

 function readAble() {
     console.log("Hello World!")
 }
 readAble();

 function product(a, b) {
            console.log(a - b)
        }

         product(5,2); 

     let outerWear = "T-shirt"
     function myOutfit() {
         let outerWear = "Sweater"
         return outerWear;
     }

      console.log(myOutfit());

    // function pressTard(a, b) {
    //     let result = a * b
    //     return result
    // }

    // console.log(pressTard(5,2));

    function sethAss (a, b) {
        let result = a + b
        // console.log(result)
        return result
    }
    console.log(sethAss(10, 5));

    function dethRow(skill) {
        return skill + 10
    }
    console.log(dethRow(14));

    function ferryBoat(speed) {
        let result = 4 * speed
        return result
    }

    console.log(ferryBoat(5));


  let dollar = 0
  function money(amount) {
      return amount + 100
  }
  dollar = money (200);
  console.log(dollar)

let processor = 0
function process(intel) {
    return (intel * 5) / 10
}
processor = process(20);
console.log(processor)

function gameOfLies (isTrue) {
    if (isTrue) {
        return "It is true";
    }
    return "It is a lie";
}

console.log(gameOfLies(false));

function froggy(val) {
    if (val == 16) {
        return "You can go out for valentine"
    } 
    return "You are too young for relationship"
}

    console.log(froggy(12))

    function gipsy(val) {
        if (val == 14) {
            return "You are too young for me"
        }

        return "You are old to be a mother"
    }
    console.log(gipsy());

    function letDoTHis(a, b) {
        if (a == b) {
            return "It is ture"
        }
        return "Not ture"
    }

    console.log(letDoTHis(10, "10"));


    function forFunction(a, b) {
        if (a == b) {
            return "Equals"
        }
        return "Not equal"
    }
    console.log(forFunction(10,"10"));

    function testNotEqual(a, b) {
        if (a !== b) {
            return "Not equal"
        }
        return "It's equal"
    }
    console.log(testNotEqual(10,"10"));

    function overThink(val) {
        if (val < 100) {
            return "Below hundred"
        } else if (val >= 100) {
            return "Above hundred"
        } else 
        return " Number not found"
    }

    console.log(overThink(101));