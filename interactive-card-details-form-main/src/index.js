           
           const form = document.querySelector('form');
            const inputs = form.querySelectorAll('input');
            const formContainer = form.parentElement
            const confirmBtn = form.querySelector('#confirm-btn');
            const thankYou = formContainer.parentElement.querySelector('#thank-you');
            
        
        const error = {
            blank: "Can't be blank",
            format:"Wrong format, numbers only"
        }
        const regValidation = {
            nameRegEx : /^[a-zA-Z\s\']*$/,
            cardRegEX : /s*(\d{4}[\s-]?){3}\d{4}\s*$/,
            monthRegEx : /^(0[1-9]|1[0-2])$/,
            yearRegEx : /^[19|20]\d{2}$/,
            cvvRegEx : /^[0-9]{3,4}$/
        }
         
   
            confirmBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (formValidation(inputs)) {
                        formContainer.classList.add('hidden');
                        thankYou.classList.remove('hidden');
                }
            })

            const formValidation = (inputs) => { 
                const validReg = Object.values(regValidation);
                const errors = Object.values(error)
                let isValid = false;
                   for (let i = 0; i < inputs.length; i++) { 
                       if (!inputs[i].value) {
                           onError(inputs[i],errors[0])
                           isValid = false
                        //    console.log(inputs[i].parentElement)
                       }
                     else if (!inputs[i].value.match(validReg[i])) {
                        onError(inputs[i],errors[1])
                        isValid = false
                    }
                    else {
                        onSuccess(inputs[i]);
                        isValid = true;
                    }
                     
                   }
                   return isValid
            }



        //  const validateInput = (inputs) => {
        //         inputs.forEach(element => {
        //             if (!element.value) {
        //                 onError(element)
        //             }
        //             else {
                        
        //             }
        //         });
        //  }
      

         const onError = (input,errorText) => { 
            const parent = input.parentElement;
            const message = `<p class="pt-1 text-red-500">${errorText}</p>`;
            parent.insertAdjacentHTML('afterend', message);
            input.classList.add('border-red-500');
        }

        const onSuccess = (input) => { 
            const parent = input.parentElement;
            const message = parent.lastChild;
            message.remove()
            input.classList.remove('border-red-500');
        }

       