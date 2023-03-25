    const sidebar = document.querySelector(".side-bar");
    const contentBox = document.querySelector(".content-box")
    const footer = document.querySelector(".footer")
    const itemBox = sidebar.querySelectorAll(".item-id")
    const sectionBox = contentBox.querySelectorAll(".content");
     const btns = footer.querySelectorAll(".btn")
    const form = document.querySelector(".form");
    const errors = document.querySelectorAll(".error");
    let isAlive = true
    let  itemArrayBox= [];
    let contentArrayBox = [];

    // Array generator function
 function arrayFilter (arrayTest,arrayBox,condition) {
    arrayTest.forEach((item) => {
        const category = item.dataset.id.includes(condition)
        if (category) {
         arrayBox.push(item.dataset.id)
        } 
    }) 
   
 }


 arrayFilter(itemBox,itemArrayBox,"step-")
 arrayFilter(sectionBox,contentArrayBox,"step-")


 

const inputs = form.querySelectorAll("input")
    function validator() {
        for (const input of inputs) {
            if (input.id === "name" && input.value === ""
               || input.id === "email" && input.value === ""
               || input.id === "number" && input.value === "") {
             
                errors.textContent = "This field is required";

               count = false
               } 
               else {
               
                displayItem(count,sectionBox)
                displayItem(count,itemBox)
                count = true
               }
           }
    }
         
          

      
                             
let count = 0         
                     
            for (const btn of btns) {
                btn.addEventListener("click", (e) => {
                  
                    if(e.currentTarget.classList.contains("next-btn"))  {
                        if ( count < itemArrayBox.length) {
                             if (contentArrayBox[count] === itemArrayBox[count]) {
                                console.log(count)
                              
                             validator()
                                
                            }
                            count++ 
                        }
                     
                   
                    } else if (e.currentTarget.classList.contains("prev-btn")) {
                       
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
                    classId.add("active")
                } else if (classId.contains("active")) {
                    classId.remove("active")
                }
              
              
             }
             if (dataId === "step-2") {
                if (!classId.contains("active")) {
                      classId.add("active")
                    }
                else if (classId.contains("active")) {
                    classId.remove("active") 
                }
            
              }
        }
       else if (count === 1 ) {
        if (dataId === "step-2") {
            if (classId.contains("active")) {
                classId.remove("active")
            } 
            else if (!classId.contains("active")) {
                classId.add("active")
            }
          }
          if (dataId === "step-3") {
            if (classId.contains("active")) {
                classId.remove("active")
            } else if (!classId.contains("active")) {
                classId.add("active")
            }
           }
        }
      else  if (count === 2 ) {
        if (dataId === "step-3") {
            if (classId.contains("active")) {
                classId.remove("active")
            } else if (!classId.contains("active")) {
                classId.add("active")
            }
          }
          if (dataId === "step-4") {
            if (classId.contains("active")) {
                classId.remove("active")
            } else if (!classId.contains("active")) {
                classId.add("active")
            }
           }
        }
        else if (count === 3) {
              if (dataId === "step-5") {
                if (classId.contains("active")) {
                    classId.remove("active")
                } else if (!classId.contains("active")) {
                    classId.add("active")
                }
               }
        }
    }
 }




