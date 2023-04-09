const items = document.querySelectorAll('.item-id');
const itemsArray = Array.from(items);
const contents = document.querySelectorAll('.content');
const contentsArray = Array.from(contents)
const btns = document.querySelectorAll('.btn');
let currentStep = 0;




btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const button = e.target.classList
        if (button.contains('prev-btn')) {
          currentStep--
            if (currentStep < 0) {
                currentStep = 0;
            }
            displaySection(currentStep)
            console.log(currentStep)
        }
        else {
            currentStep++
         if (currentStep > itemsArray.length) {
            currentStep = itemsArray.length
         }
         displaySection(currentStep)
         console.log(currentStep)
        }
      
    })
})




    function formValidation (contentsArray) {
        contentsArray.filter((item) => {
            if (item.classList.contains('active')) {
                console.log(item)
            }
        })
       
    }

    function displaySection(currentStep) {
       for (let i = 0; i < contentsArray.length; i++) {
        const currentElement = contentsArray[i];
        const nextElement = contentsArray[currentStep];
          if (i === currentStep) {
            nextElement.classList.add('active');
          
          }
          else if (i !== currentStep) {
          
            currentElement.classList.remove('active')
       
          }
          displayProgress(currentStep)
         
       }
    }



   function displayProgress(currentStep) {
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
  


