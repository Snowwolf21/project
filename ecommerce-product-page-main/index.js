 // local data of images 
 const productImage = [
    {
        id: 0,
        name: "prodcut-1",
        url: "url(./images/image-product-1.jpg)",
        class:"active"
    },
    {
        id: 1,
        name: "product-2",
        url: "url(./images/image-product-2.jpg)",
        class:"active"
    },
    {
        id: 2,
        name: "product-3",
        url: "url(./images/image-product-3.jpg)",
        class:"active"
    },
    {
        id: 3,
        name: "product-4",
        url: "url(./images/image-product-4.jpg)",
        class:"active"
    }
 ]

// Selecting  hero and modal element
    const hero = document.querySelector(".hero")
    const show_modal = document.querySelector(".show-modal")
    const modal_content = document.querySelector(".modal-content")
    // Modal btn selecting
    const hero_btns = document.querySelector(".hero-btns");
    const heroBtns = hero_btns.querySelectorAll(".btn")

    


  


//  Selecting all buttons 
    const navBtn = document.querySelector(".nav-btn")

    // Close nav btn
    const closeBtn = document.querySelector(".close-btn") 
    const cartBtn = document.querySelector(".cart-btn")
    const btns_container = document.querySelector(".btns-container")
    const btns = btns_container.querySelectorAll(".btn")

    // Selecting count output
    const empty_text = document.querySelector(".empty-txt")
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
    const price_btns = price.querySelectorAll(".btn")
    const nav_links = links.classList
    const remove_empty_cart = empty_cart.classList
    const show_price = price.classList 

    const backgroundImage_modal_btn = document.querySelector("inner-container"); 
    const  backgroundImage_btns = document.querySelectorAll(".btn")
    // const modal_thumbNail = document.querySelector( ".modal-thumb-nail")
    const modal_thumbNail = document.querySelector( ".hero-btns")
    const modal_thumbNail_btn = modal_thumbNail.querySelectorAll(".btn");
     let currentItem = 0

  
        





     


    
     

   // Show-modal function
    heroBtns.forEach((btn) => {
        btn.addEventListener("click", function (e) {
            show_modal.style.visibility = "visible";
            modal_content.style.visibility = "visible";

                 
        })
    })


        // navigation button function
        navBtn.addEventListener("click", () => {
                nav_links.toggle("show-links")
        console.log('Hello')
        })

        // close button function
        closeBtn.addEventListener("click", () => {
            nav_links.toggle("show-links")
        })

        //  Cart button function
        cartBtn.addEventListener("click", () => {
            cart_info_container.classList.toggle("show-cart")
        })

    
                // Decrease btn, increase btn and add to cart btn

        for (let btn of btns) {
            btn.addEventListener("click", (key) => {
                
                // console.log("Hello!!")
                const button = key.currentTarget.classList
                if (button.contains("increase")) {
                    count++;
                    if (count > 0) {
                        cart_count_display.textContent = count;
                    }
                    
                } else if (button.contains("decrease")) {
                    count--
                    if (count < 0) {
                        count = 0
                        
                    }
                    cart_count_display.textContent = count;
                } else if (button.contains("cart-btn")) {
                    remove_empty_cart.add("remove-empty-cart"); 
                    show_price.add("show-price");
                    result =  "$" + eval(125.00 * count) ;
                    count_display.textContent = count;

                    result_display.textContent = result
                
                } else {
                    count = 0
                    
                }
            info_output.textContent = count;
                cart_count_display.style.visibility = "visible"
            })
        } 


        for (let btn of price_btns) {
            btn.addEventListener("click", (e) => {
                const key = e.currentTarget.classList
                if (key.contains("delete")) {
                    remove_empty_cart.remove("remove-empty-cart"); 
                    show_price.remove("show-price");
                } else if (key.contains("check-out")) {
                    remove_empty_cart.remove("remove-empty-cart"); 
                    show_price.remove("show-price");
                    empty_text.textContent = "Order recieved!!"
                }
                
                console.log("Hello!")
            })
        }




       

        
        function showHero (currentItem) {
            const item = productImage[currentItem] 
            hero.style.backgroundImage = item.url
            modal_content.style.backgroundImage = item.url
        }


        backgroundImage_btns.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                const key = e.currentTarget.classList
                const first_product = document.querySelectorAll(".product-1-btn")
                // first_product.classList.add("active")
                first_product.forEach((product) => {
                    product.classList.add("active")
                })
                       if (key.contains("prev-btn")) {
                              console.log("previous")
                                 currentItem--
                               
                                if (currentItem < 0) {
                                    currentItem = productImage.length - 1;
                                
                                } 
                       } else if (key.contains("next-btn")) {
                                console.log("next")
                                currentItem++
                                if (currentItem == "1") {
                                    const second_product = document.querySelectorAll(".product-2-btn")
                                    // second_product.classList.add("active")
                                    second_product.forEach((product) => {
                                        product.classList.add("active")
                                    })
                                }
                                if (currentItem == "2") {
                                    const third_product = document.querySelectorAll(".product-3-btn")
                                    // third_product.classList.add("active")
                                    third_product.forEach((product) => {
                                        product.classList.add("active")
                                    })
                                }
                                
                                if (currentItem == "3" ) {
                                    const fourth_product = document.querySelectorAll(".product-4-btn")
                                    // fourth_product.classList.add("active")
                                    fourth_product.forEach((product) => {
                                        product.classList.add("active")
                                    })
                                }
                                if (currentItem > productImage.length - 1) {
                                currentItem = 0
                                }
                            
                       } else if (key.contains("close-modal")) {
                                show_modal.style.visibility = "hidden";
                                modal_content.style.visibility = "hidden";
                             }
                               showHero(currentItem)
                                                
            })
        })

       



         // if (e.currentTarget.classList.contains("product-1-btn")) {
        //     currentItem = 0
        //     showHero(currentItem)
        //      e.currentTarget.classList.add("active")
        //    } else if (e.currentTarget.classList.contains("product-2-btn")) {
        //     currentItem = 1;
        //     showHero(currentItem)
           
        //    } else if (e.currentTarget.classList.contains("product-3-btn")) {
        //     currentItem = 2;
        //     showHero(currentItem)
           
        //    }else if (e.currentTarget.classList.contains("product-4-btn")) {
        //     currentItem = 3;
        //     showHero(currentItem)
            
        //    }




         // function cleanResult(result) {
        //     const result_string = result.toString()
        //     const result_string_array = result_string.length
        //     for (let i = result_string_array - 3; i < result_string_array - 3; i -= 3) {
        //         result_string_array[i] = result_string.splice(",")
        //     }
        //     return result_string_array.join("")
        // }




        //  backgroundImage_btns.forEach(()) {
    //     btn.addEventListener("click", (e) => {
    //         const key = e.currentTarget.classList
    //        if (key.contains("prev-btn")) {
    //               console.log("previous")
    //             currentItem--
    //             if (currentItem < 0) {
    //                 currentItem = productImage.length - 1;
                  
    //             } 
    //        } else if (key.contains("next-btn")) {
    //         console.log("next")
    //         currentItem++
    //         if (currentItem > productImage.length - 1) {
    //            currentItem = 0
    //         }
          
    //        } 
        //    else if (key.contains("product-1-btn")   ||
        //              key.contains("product-2-btn") ||
        //              key.contains("product-3-btn")  ||
        //              key.contains("product-4-btn") ) {
        //                 key.toggle("active")
        //    } 
    //     else if (key.contains("close-modal")) {
    //         show_modal.style.visibility = "hidden";
    //         modal_content.style.visibility = "hidden";
    //        }

          

    //          showHero(currentItem)
    //     })
    //  }

      
    //  modal_thumbNail_btn.forEach((btn) => {
    //     btn.addEventListener("click", (e) => {
    //         if (e.currentTarget.classList.contains("product-1-btn")) {
    //             currentItem = 0
    //             showHero(currentItem)
    //              e.currentTarget.classList.add("active")
    //            } else if (e.currentTarget.classList.contains("product-2-btn")) {
    //             currentItem = 1;
    //             showHero(currentItem)
               
    //            } else if (e.currentTarget.classList.contains("product-3-btn")) {
    //             currentItem = 2;
    //             showHero(currentItem)
               
    //            }else if (e.currentTarget.classList.contains("product-4-btn")) {
    //             currentItem = 3;
    //             showHero(currentItem)
                
    //            }
    //     })
    //  })


      // const modal_hero_btns = hero.querySelectorAll(".btn")
    // modal_hero_btns.forEach((btn) => {
    //     btn.addEventListener("click", (e) => {
    //         const key = e.currentTarget.classList
    //         if (key.contains("prev-btn")) {
    //             console.log("Previous")
    //         } else if ("next-btn") {
    //             console.log("Next")
    //         } 
    //     })
    // })