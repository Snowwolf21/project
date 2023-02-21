    const sidebar = document.querySelector(".side-bar");
    const contentBox = document.querySelector(".content-box")
    const footer = document.querySelector(".footer")
    const itemBox = sidebar.querySelectorAll(".item-id")
    const sectionBox = contentBox.querySelectorAll(".content");
     const btns = footer.querySelectorAll(".btn")

    let count = 0;
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

   




    window.addEventListener("DOMContentLoaded", () => {
        btns.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                const key = e.currentTarget.classList;
                arrayFilter(itemBox,itemArrayBox,"step-")
                arrayFilter(sectionBox,contentArrayBox,"step-")
                
                if (key.contains("next-btn")) {
                //    console.log(itemBox)
                //    console.log(sectionBox)
                    count++               
                    if (contentArrayBox[count] === itemArrayBox[count]) {
                            console.log(contentArrayBox[count])
                            console.log(itemArrayBox[count])
                            // console.log(count)
                          
                       
                                

                        } else if (contentArrayBox[count] !== itemArrayBox[count]) {
                        //  console.log(count)
                        console.log(contentArrayBox[count]);
                            // console.log(count)
                        
                     }else {
                    
                     }
                
          

                } else if (key.contains("prev-btn")) {
                    // count--
                
                }
                // console.log(count)
            })
        })
    })


 

    // for (let i = 0; i < itemBox.length; i++) {
    //  if (itemBox[i].classList.contains("active")) {
    //     //   itemBox[i].classList.remove("active")
    //      console.log(i)
    //  } else {
    //     // itemBox[i].classList.add("active")
    //     console.log(i)
    //  }
       
    // }


// console.log(itemBox)
    // itemBox.forEach((item) => {
    //     const active = item.classList.contains("active")
    //     if (active) {
    //         item.classList.remove("active")
    //     } else {
    //         // if ()
    //     }
    // })

        
    // for (let count = 0; count < contentArrayBox.length; count++) {
     
       
    //  }











    // for (let i = 0; i < contentArrayBox.length; i++) {
     
    //    if (contentArrayBox[i] === itemArrayBox[i]) {
    //         console.log(i)
    //    } else if (contentArrayBox[i] !== itemArrayBox[i]) {
    //     console.log(i)
    // }  
    // }




