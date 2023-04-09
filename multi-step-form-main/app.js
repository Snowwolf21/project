    const sidebar = document.querySelector(".side-bar");
    const contentBox = document.querySelector(".content-box")
    const footer = document.querySelector(".footer")
    const itemBox = sidebar.querySelectorAll(".item-id")
    const sectionBox = contentBox.querySelectorAll(".content");
     const btns = footer.querySelectorAll(".btn")
    const form = document.querySelector(".form");
    const errors = document.querySelectorAll(".error");
    let isAlive = true
    const  itemArrayBox= Array.from(itemBox);
    const contentArrayBox = Array.from(sectionBox);
    console.log(itemArrayBox);
    console.log(contentArrayBox);
    // Array generator function



 


         
          
//  select the form 
// if the input value is empty return break
// if the input value is is not empty and it equals name email or phone number contitnue
      
                             
let count = 0         
                     
            for (const btn of btns) {
                btn.addEventListener("click", (e) => {
                  
                    if(e.currentTarget.classList.contains("next-btn"))  {
                        if ( count < itemArrayBox.length) {
                             if (contentArrayBox[count] === itemArrayBox[count]) {
                                console.log(count)
                                
                                displayItem(count,sectionBox)
                                displayItem(count,itemBox)
                                
                                



                                   
                            }
                            count++ 
                        }
                    } 
                    else if (e.currentTarget.classList.contains("prev-btn")) {
   
                        if (count > itemArrayBox.length) {
                            count = itemArrayBox.length - 1   
                        }     
                        count--
                        if (count < 0) {
                            count = 0
                            return false
                        }  
                        if (contentArrayBox[count] === itemArrayBox[count]) {
                            console.log(count)
                            displayItem(count,sectionBox)
                            displayItem(count,itemBox)
                        }

                     
                    }
                })
            }




 function displayItem(count,testBox) {
    for (const item of testBox) {
        const dataId = item.dataset.id
        const classId = item.classList
        if (count === 0 ) {
             if (dataId === "step-1") {
               
                if (!classId.contains("active")) {
                    classId.toggle("active")
                }
                else {
                    classId.toggle("active")
                }
             }
             if (dataId === "step-2") {
                if (!classId.contains("active")) {
                    classId.toggle("active")
                    }
                else {
                    classId.toggle("active")
                }  
              }
        }
       else if (count === 1 ) {
        if (dataId === "step-2") {
            if (classId.contains("active")) {
                classId.toggle("active")
            } 
            else {
                classId.toggle("active")
            }
          }
          if (dataId === "step-3") {
            if (classId.contains("active")) {
                classId.toggle("active")
            }
            else {
                classId.toggle("active")
            }
           }
        }
      else  if (count === 2 ) {
        if (dataId === "step-3") {
            if (classId.contains("active")) {
                classId.toggle("active")
            } 
            else {
                classId.toggle("active")
            }
          }
          if (dataId === "step-4") {
            if (classId.contains("active")) {
                classId.toggle("active")
            } 
            else {
                classId.toggle("active")
            }
           }
        }
        else if (count === 3) {
              if (dataId === "step-5") {
                if (classId.contains("active")) {
                    classId.toggle("active")
                }
                else {
                    classId.toggle("active")
                }
               }
        }
    }
 }




