    // Selection element
    const items = document.querySelectorAll('.item-id');
    const itemsArray = Array.from(items);
    const contents = document.querySelectorAll('.content');
    const checkPlan = document.querySelector('.step-4')
    const contentsArray = Array.from(contents)
    const footer = document.querySelector('.footer');
    const prevBtn = footer.querySelector('.prev-btn');
    const nextBtn = footer.querySelector('.next-btn');
    const confirmBtn= footer.querySelector('.submit-btn')
    const form = document.querySelector('.form');
    const selectPlanPrice = document.querySelector('.step-2');
    const planContainer = selectPlanPrice.querySelector('.plan-container');
    const articles = Array.from(planContainer.querySelectorAll('article'));
    const toggleBtn = planContainer.querySelector('.toggle-btn');
    const addOns = document.querySelector('.step-3');
    const checkPrice = document.querySelector('.step-4');
    const addOnsPrice = Array.from(addOns.querySelectorAll('article'))
    const priced = document.querySelectorAll('.price');
    const addOnsPlans = addOns.querySelectorAll('.amount');
    const monthlyPrice = [9,12,15];
    const yearlyPrice = [90,120,150];
    const monthlyAddOn = [1,2,2];
    const yearlyAddOn = [10,20,20]
     let currentStep = 0;
     let planPrice;
     let selectedAddOns;
     let selectedPrice;
     let total = 0;
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
    
   
        
           
         

      // button for toggle to switch between the monthly and yearly plan;
         toggleBtn.addEventListener('click', (e) => {
                const button = e.target.classList;
                     if(button.contains('active')) {
                         button.remove('active'); 
                        displayPrice(monthlyPrice,monthlyAddOn,'mo');  
                        selectedDuration('Monthly','per month');
                        selectedPrice = priceToggle(articles,monthlyPrice)
                     selectedAddOns =  selectPrice(addOnsPrice,monthlyAddOn)
                     console.log(selectedAddOns)
                     }
                     else {
                         button.add('active')   
                        displayPrice(yearlyPrice,yearlyAddOn,'yr');
                          selectedDuration('Yearly','per year') 
                      selectedPrice =  priceToggle(articles,yearlyPrice);
                       selectedAddOns = selectPrice(addOnsPrice,yearlyAddOn)
                      
                     }  
                    // AddOnSwitch(button) 
                    duration()
                  
                 })  
            // Toggle the price
                 const priceToggle = (articles,priceBox) => {
                    let index;
                    let thePrice = 0;
                    articles.forEach((article) => {
                        index =  articles.indexOf(article)
                        if(article.classList.contains('active')) {
                            thePrice = priceBox[index]
                        }
                       
                    })
                   return thePrice
                 }
               
                 // To show the price duration that is selected, monthly or yearly
                 const selectedDuration = (selectedValue,durValue) => {
                         const confirm = checkPlan.querySelector('.selected-plan');
                         const totalDuration = checkPlan.querySelector('.total-duration')
                         confirm.innerHTML  = `(${selectedValue})`;
                         totalDuration.innerHTML = `(${durValue})`

                 }

     


                // Show the plan selected
                 articles.forEach((article) => {
                    article.addEventListener('click', () => {
                        article.classList.toggle('active');
                       
                        // To show plan selected at the double check section
                        showSelectedPlan(article,checkPlan);
                        articles.forEach((item) => {
                            if (item !== article) {
                                item.classList.remove('active');
                            }
                        })
                    })
                 })
               

          


            // Function to show the selected plan and price at step-4
            const showSelectedPlan = (article,checkPlan) => {
                const selectedName =  checkPlan.querySelector('.selected-name');
                const selectedPrice = checkPlan.querySelector('.amount');
                selectedName.innerHTML = ''
                  selectedPrice.innerHTML = ''
               selectedName.innerHTML = article.querySelector('.title').innerHTML;
                selectedPrice.innerHTML = article.querySelector('.price').innerHTML;
                 
              }

         
     
            function renderTotal (toggleBtn,checkPlan) {
                let totalAmount;
                let dur;
              
             const totalPrice =  checkPlan.querySelector('.total-price');
             if (!toggleBtn.classList.contains('active')) {
               dur = 'mo'
             }
             else {
                dur = 'yr'
             }
               totalAmount = planPrice + total
             totalPrice.innerHTML = `$${totalAmount}/${dur}`
             totalAmount = ''
            }
    
      // To show the selected AddOns
         addOnsPrice.forEach((addOn) => {    
            addOn.addEventListener('click', (e) => {
                let current = e.currentTarget.querySelector('input');
                addOn.classList.toggle('active')
                current.classList.toggle('selected');
                if ( current.classList.contains('selected')) {
                   current.checked = true;
                    // selectedAddOns =   selectAddOn(addOn);
                   
                }
                else {
                    current.checked = false;
                   
                }
             
                  showSelectedAddOn(current,checkPlan)  
                 
            })     
      })

    //   function changePrice (addsPriceBox) {
        
    //          return selectPrice(addOnsPrice,addsPriceBox);
    //   }

    
           // Selecting price from the catalogue and also for monthly or yearly 
           const selectPrice = (addOnsPrice,addsPriceBox) => {
            let index 
            let selectedAddOn
            let myPrice = 0
                addOnsPrice.forEach((addOn) => {
                    let isActive = addOn.classList.contains('active')
                    let input = addOn.querySelector('input');
          
                    index = addOnsPrice.indexOf(input.parentElement);
                    // selectedAddOn = addsPriceBox[index];
                    if (input.checked && isActive) {
                        
                        myPrice = addsPriceBox[index]
                       
                    }
                   
                })
                
                return myPrice
         }



      const showSelectedAddOn = (current,checkPlan) => {
            const addContainer = checkPlan.querySelector('.finish-container');
            const finishBox = document.createElement('div');
            const text = document.createElement('p');
            const cost = document.createElement('p');
            finishBox.appendChild(text) 
            finishBox.appendChild(cost)
            finishBox.classList.add('finish-box');
            text.classList.add('text');
            cost.classList.add('text');
            text.textContent =   current.parentElement.querySelector('.title').innerHTML;
            cost.textContent =   current.parentElement.querySelector('.amount').innerHTML;
           if (current.checked) {
              addContainer.appendChild(finishBox);
           }
           else {
            addContainer.lastElementChild.remove()
           }
      }
        //  showSelectedAddOn(addOns,checkPlan)

      const selectAddOn = (addOns) => {
          let selectAdd ;
           const isToggled =  toggleBtn.classList.contains('active')
           const index = addOnsPrice.indexOf(addOns)
            if (isToggled) {
               selectAdd = yearlyAddOn[index];
            }
           else if (!isToggled) {
                  selectAdd = monthlyAddOn[index];
            }
            else {
                selectAdd = 0
            }
            return selectAdd
      }

             //    display the monthly or yearly price when the toggle btn click
              function displayPrice (moPrice,moAddOn,dur) {
                let thePrice;
                    for (let i =0; i < moPrice.length; i++) {
                       
                          priced[i].innerHTML = `$${moPrice[i]}/${dur}`;
                        addOnsPlans[i].innerHTML = `$${moAddOn[i]}/${dur}`; 
               
                 } 
                    
                 }

        // duration function
                 function duration() {
                        const duration = document.querySelectorAll('.duration')
                        for (let i = 0; i < duration.length; i++) {
                            const element = duration[i];
                           if (!element.classList.contains('hidden')) {
                            element.classList.add('hidden');
                           }
                           else {
                            element.classList.remove('hidden')
                           }
                        }
                    }        




                
       //form validation function
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

    //  Input  success validation
    function onSuccess(input) {
        let parent = input.parentElement
        let message = parent.querySelector('.error');
        message.classList.add('hidden')
      
      
       
    }
               
                // input error validation    
function onError(input) {
    let parent = input.parentElement
    let message = parent.querySelector('.error');
    message.classList.remove('hidden')
    
}


    // function isvalidEmail(emailText) {
    //     const regex =   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // let validate = regex.test(emailText) 
    //     if (emailText.value !== validate) {
    //         return false
    //     }
      
    // }
    
    // function validPhone (phone) {
    //     const phoneno = /^\+?([0-9]{3})\)?[- ]?([0-9]{4})[- ]?([0-9]{4})$/;
    //         return phoneno.test(phone)
    // }





            // display the next and goBack btn;
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
                    nextBtn.classList.remove('hidden');
                   
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
                       if (currentStep === 3) {
                        renderTotal(toggleBtn,checkPlan)
                       }
                    }  
            }
            displayProgress(currentStep) 
            displayBtn(currentStep);
            
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

