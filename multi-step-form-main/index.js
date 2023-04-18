    // Selection element
    const items = document.querySelectorAll('.item-id');
    const itemsArray = Array.from(items);
    const contents = document.querySelectorAll('.content');
    const contentsArray = Array.from(contents)
    const footer = document.querySelector('.footer');
    const prevBtn = footer.querySelector('.prev-btn');
    const nextBtn = footer.querySelector('.next-btn');
    const confirmBtn= footer.querySelector('.submit-btn')
    const form = document.querySelector('.form');
    const selectPlanPrice = document.querySelector('.step-2');
    const planContainer = selectPlanPrice.querySelector('.plan-container');
    const articles = Array.from(planContainer.querySelectorAll('article'));
    const btn = planContainer.querySelector('.toggle-btn');
    let currentStep = 0;
   
    // previous btn
    prevBtn.addEventListener('click', (e) => {
        e.preventDefault()
              currentStep--
                      displayBtn(currentStep)
                      displaySection(currentStep)
    })
    // next btn
         nextBtn.addEventListener('click', (e) => {
            e.preventDefault()
            
           if(formValidation()) {
            currentStep++;
            displaySection(currentStep)
           }
       

    })
        // confirm btn
             confirmBtn.addEventListener('click', (e) => {
                e.preventDefault()
                currentStep++
              
                displaySection(currentStep)
         
             })
    
   
       // Selecting Plan
        for (let i = 0; i < articles.length; i++) {
            const planCard = articles[i];
        
            planCard.addEventListener('click', (e) => {
                const target = e.currentTarget
              if (planCard[i] !== target) {
                target.classList.remove('active')
              }
              else {
                target.classList.add('active')
              }     
            })
            
        }
      
     
            btn.addEventListener('click', (e) => {
                const button = e.target.classList;
                     if(button.contains('active')) {
                         button.remove('active');    
                     }
                     else {
                         button.add('active')   
                     }  
                    priceSwitch(button) 
                    duration()
                 })  
        
                 function duration() {
                        const duration = document.querySelectorAll('.duration')
                        for (let i = 0; i < duration.length; i++) {
                            const element = duration[i];
                           if (!element.classList.contains('hidden')) {
                            element.classList.add('hidden')
                           }
                           else {
                            element.classList.remove('hidden')
                           }
                        }
                    }        



        // price switcher()
       function priceSwitch (button) {
        const monthlyPrice = [9,12,15];
        const yearlyPrice = [90,120,150];
        const priced = document.querySelectorAll('.price')
        if (button.contains('active')) {
            priced[0].innerHTML = `$${yearlyPrice[0]}/yr`
            priced[1].innerHTML = `$${yearlyPrice[1]}/yr`
            priced[2].innerHTML = `$${yearlyPrice[2]}/yr`
            // setTime(true)
        }
        else {
            priced[0].innerHTML = `$${monthlyPrice[0]}/mo`
            priced[1].innerHTML = `$${monthlyPrice[1]}/mo`
            priced[2].innerHTML = `$${monthlyPrice[2]}/mo`
            // setTime(false)
        }
       }
     function formValidation () {
        const inputs = Array.from(form.querySelectorAll('input'));
       let valid = true;
      for (let i = 0; i< inputs.length; i++) {
            const input = inputs[i]
            if (!input.value) {
                valid = false;
                onError(input)
            }
            else {
                valid = true;
                onSuccess(input)
            }
      }
      return valid
     }


    function onSuccess(input) {
        let parent = input.parentElement
        let message = parent.querySelector('.error');
        message.classList.add('hidden')
       
    }
               
                   
function onError(input) {
    let parent = input.parentElement
    let message = parent.querySelector('.error');
    message.classList.remove('hidden')
}


    // function isvalidEmail(emailText) {
    //     const regex =   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return regex.test(emailText)
    // }
        
    // function validPhone (phone) {
    //     const phoneno = /^\+?([0-9]{3})\)?[- ]?([0-9]{4})[- ]?([0-9]{4})$/;
    //         return phoneno.test(phone)
    // }





            // display the btns
     const displayBtn = (currentStep) => {
        if (currentStep < 0) {
            currentStep = 0
        }
         else if (currentStep === 0) {
            prevBtn.classList.add('hidden');
        }
        else if (currentStep === 1) {
            prevBtn.classList.remove('hidden')
        }
        else if (currentStep === 2) {
            confirmBtn.classList.add('hidden');
            nextBtn.classList.remove('hidden')
        }
       else if (currentStep === itemsArray.length - 1) {
            nextBtn.classList.add('hidden');
            confirmBtn.classList.remove('hidden');  
         }
         else {
            currentStep = itemsArray.length
            prevBtn.classList.add('hidden');
            confirmBtn.classList.add('hidden');  
         }
}












        // display the section or forms
        const displaySection = (currentStep) => {
            for (let i = 0; i < contentsArray.length; i++) {
                const currentElement = contentsArray[i];
                const nextElement = contentsArray[currentStep];
                    if (i !== currentStep  ) {
                        nextElement.classList.add('active');
                        currentElement.classList.remove('active')
                        
                    }
                    else if (i === currentStep) {
                        currentElement.classList.remove('active')
                        nextElement.classList.add('active');
                       
                    }
                    
            }
            displayProgress(currentStep) 
            displayBtn(currentStep) 
        }


        // displat the progress bar
    const displayProgress = (currentStep) => {
            for (let i = 0; i < itemsArray.length; i++) {
                const itemElement = itemsArray[i];
                const currentElement = itemsArray[currentStep];
                    if ( i === currentStep ) {  
                        currentElement.classList.add('active')   
                    }
                    if (i !== currentStep) {
                        if (currentStep < itemsArray.length) {
                            itemElement.classList.remove('active');  
                        }  
                 }        
            }
        }
    



    // if (i === 2) {
            //     planCard.addEventListener('click', () => {
            //         const month = monthlyPrice[i];
            //         const year = yearlyPrice[i]
            //         console.log(month) 
            //         console.log(year)  
            //       })
            // }
            // else if (i === 1) {
            //     planCard.addEventListener('click', () => {
            //         const month = monthlyPrice[i];
            //         const year = yearlyPrice[i]
            //         console.log(month) 
            //         console.log(year)  
            //       })
            // }
            // else {
            //     planCard.addEventListener('click', () => {
            //         const month = monthlyPrice[i];
            //         const year = yearlyPrice[i]
            //         console.log(month) 
            //         console.log(year)  
            //       })
            // }































         // btns.forEach((btn) => {
    //     btn.addEventListener('click', (e) => {
    //         const btn = e.target.classList
           
            
    //         if (btn.contains('prev-btn')) {
    //                 currentStep--
    //                 if (currentStep < 0) {
    //                         currentStep = 0;
    //                     }
    //                     console.log(currentStep)
    //         }


    //         else if (btn.contains('next-btn')) {
    //                     currentStep++
    //                     if (currentStep > 0 ) {
                          
    //                      }
    //                 else if (currentStep > itemsArray.length) {
    //                         currentStep = itemsArray.length

    //                      }
                       
    //                         console.log(currentStep)
    //         }


    //         else {
    //             console.log(currentStep)
    //         }
         
        
      
       
        
    //     })
    // })

