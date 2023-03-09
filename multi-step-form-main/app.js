    const sidebar = document.querySelector(".side-bar");
    const contentBox = document.querySelector(".content-box")
    const footer = document.querySelector(".footer")
    const itemBox = sidebar.querySelectorAll(".item-id")
    const sectionBox = contentBox.querySelectorAll(".content");
     const btns = footer.querySelectorAll(".btn")
    const form = document.querySelector(".form");

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


 
//     btns.forEach((btn) => {
//         btn.addEventListener("click", (e) => {
//             const key = e.currentTarget.classList;
//             if (key.contains("next-btn")) {

//                 count++               
//                 if (contentArrayBox[count] !== itemArrayBox[count]) {
                           
//                     for (const item of sectionBox) {
//                        if (item.dataset.id === "step-5") {
//                            if (!item.classList.contains("active")) {
//                                item.classList.add("active")
//                            } else {
//                                item.classList.remove("active")
//                            }
//                        }
//                     }
//                 } 
//                 else  {
                           
//                     if (contentArrayBox[count] === itemArrayBox[count]) {
                     
//                         console.log(count)
                   
                      
                 
//         }
//        } 
         
//             }
//         else if (key.contains("prev-btn")) {
//                 if (count === 0 || count === contentArrayBox.length && count > itemArrayBox.length) {
//                     count = contentArrayBox.length
//                 } 
//                    count--
//                 //  console.log(count)
//                 if (count < itemArrayBox.length) {
               
//                     activeFunction(itemBox)
//                     activeFunction(sectionBox)
//             }
//         }
             
//         })
       
//     })




//         function activeFunction(activeBox) {
//             for (const item of activeBox) {
                
//                     if (count === 3) {  
//                     if ( item.dataset.id === "step-3") {   
//                         item.classList.remove('active')
//                     }
//                     if ( item.dataset.id === "step-4") {   
//                         item.classList.add("active") 
//                     }
//                     }
//                     else if (count === 2) {
//                         if ( item.dataset.id === "step-2") {
//                             item.classList.remove("active")
//                         }
//                         if ( item.dataset.id === "step-3") {
//                             item.classList.add("active")
//                         }
                    
//                         }
//                     else  if (count === 1) {
//                             if ( item.dataset.id === "step-1") { 
//                                 item.classList.remove("active")
                            
//                             }
//                         if ( item.dataset.id === "step-2") {
//                                 item.classList.add("active")
//                             }
//                             }
                                                           
            
//             }
//         }

                      
                        
                
                           
          

      
                             
let count = 0         
                     
            for (const btn of btns) {
                btn.addEventListener("click", (e) => {
                  
                    if(e.currentTarget.classList.contains("next-btn"))  {
                        if ( count < contentArrayBox.length) {
                         
                            // if (contentArrayBox[count] !== itemArrayBox[count]) {
                            //     console.log(count)
                            //     displayItem(count,sectionBox)
                            // } 
                             if (contentArrayBox[count] === itemArrayBox[count]) {
                                console.log(count)
                                displayItem(count,sectionBox)
                                
                            }
                            count++ 
                        }
                     
                   
                    } else if (e.currentTarget.classList.contains("prev-btn")) {
                       
                        if (count > sectionArrayBox.length) {
                            count = itemArrayBox.length - 1   
                        }  
                        
                        count--
                      
                        if (count < 0) {
                            count = 0
                        }  
                        if (contentArrayBox[count] === itemArrayBox[count]) {
                            console.log(count)
                            displayItem(count,sectionBox)
                        }

                     
                    }
                })
            }




 function displayItem(count,sectionBox) {
    for (const section of sectionBox) {
        if (count === 0 ) {
             if (section.dataset.id === "step-1") {
               if(!section.classList.contains("active")) {
                section.classList.add("active")
               } else {
                section.classList.remove("active")
               }
             }
             if (section.dataset.id === "step-2") {
                if(!section.classList.contains("active")) {
                 section.classList.add("active")
                } else {
                 section.classList.remove("active")
                }
              }
        }
       else if (count === 1 ) {
        if (section.dataset.id === "step-2") {
            if(section.classList.contains("active")) {
             section.classList.remove("active")
            } else {
                section.classList.add("active")
            }
          }
          if (section.dataset.id === "step-3") {
             if(!section.classList.contains("active")) {
              section.classList.add("active")
             } else {
              section.classList.remove("active")
             }
           }
        }
      else  if (count === 2 ) {
        if (section.dataset.id === "step-3") {
            if(section.classList.contains("active")) {
             section.classList.remove("active")
            } else {
                section.classList.add("active")
            }
          }
          if (section.dataset.id === "step-4") {
             if(!section.classList.contains("active")) {
              section.classList.add("active")
             } else {
              section.classList.remove("active")
             }
           }
        }
        else if (count === 3) {
            if (section.dataset.id === "step-4") {
                if(section.classList.contains("active")) {
                 section.classList.remove("active")
                } else {
                    section.classList.add("active")
                }
              }
              if (section.dataset.id === "step-5") {
                section.classList.add("active")
                 
               }
        }
    }
 }
