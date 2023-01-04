//  Selecting all buttons 
const navBtn = document.querySelector(".nav-btn")
const closeBtn = document.querySelector(".close-btn") 
const cartBtn = document.querySelector(".cart-btn")
const btns_container = document.querySelector(".btns-container")
  const btns = btns_container.querySelectorAll(".btn")

    // Selecting count output
    const info_output = document.querySelector(".info-output")
    let count = 0

    // Selecting all toggle links 
const cart_info_container = document.querySelector(".cart-info")
 const links = document.querySelector(".links")
const empty_cart = document.querySelector(".empty-cart")
const price = document.querySelector(".price")
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
                remove_empty_cart.add("remove-empty-cart") 
              show_price.toggle("show-price")

               
            } else {
                count = 0
                
            }
           info_output.textContent = count;
        })
    }


