const btns = document.querySelectorAll(".btn");
 btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const key = e.classList
        console.log(key)
    })
 })