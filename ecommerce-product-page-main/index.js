//  Selecting all buttons 
const navBtn = document.querySelector(".nav-btn")
const closeBtn = document.querySelector(".close-btn") 
const cartBtn = document.querySelector(".cart-btn")
const btns_container = document.querySelector(".btns-container")
  const btns = btns_container.querySelectorAll(".btn")

    // Selecting count output
    const info_output = document.querySelector(".info-output")
    const count_display = document.querySelector(".count");
    const result_display = document.querySelector(".result")
    const cart_count_display = document.querySelector(".cart-count")
    let result = "" 
    let count = 0
   
    // Selecting all toggle links 
const cart_info_container = document.querySelector(".cart-info")
 const links = document.querySelector(".links")
const empty_cart = document.querySelector(".empty-cart")
const price = document.querySelector(".price-box")
const nav_links = links.classList
const remove_empty_cart = empty_cart.classList
const show_price = price.classList 


    navBtn.addEventListener("click", () => {
            nav_links.toggle("show-links")
    console.log('Hello')
    })


    closeBtn.addEventListener("click", () => {
        nav_links.toggle("show-links")
    })


    cartBtn.addEventListener("click", () => {
        cart_info_container.classList.toggle("show-cart")
    })

  


    for (let btn of btns) {
        btn.addEventListener("click", (key) => {
            
            // console.log("Hello!!")
            const button = key.currentTarget.classList
            if (button.contains("increase")) {
                count++;
                
            } else if (button.contains("decrease")) {
                count--
                if (count < 0) {
                    count = 0
                }
               
            } else if (button.contains("cart-btn")) {
                remove_empty_cart.add("remove-empty-cart"); 
                show_price.add("show-price");
                result =  "$" + parseInt(eval(125.00 * count)) ;
                count_display.textContent = count;

                result_display.textContent = result
              
            } else {
                count = 0
                
            }
           info_output.textContent = count;
           cart_count_display.textContent = count;
        })
    }


    function cleanResult(result) {
        const result_string = result.toString()
        const result_string_array = result_string.length
        for (let i = result_string_array - 3; i < result_string_array - 3; i -= 3) {
            result_string_array[i] = result_string.splice(",")
        }
        return result_string_array.join("")
    }
