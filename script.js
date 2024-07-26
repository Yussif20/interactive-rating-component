const ratingNumbers = document.querySelectorAll(".rating__num");
[...ratingNumbers].map((num)=>{
    num.addEventListener("click",()=>{
        const activeEl = document.querySelector(".active");
        if(activeEl){
            activeEl.classList.remove("active")
        }
        num.classList.add("active")
    })
})