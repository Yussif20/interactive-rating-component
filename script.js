const ratingNumbers = document.querySelectorAll(".rating__num");
[...ratingNumbers].map((num)=>{
    num.addEventListener("click",()=>{
        const activeEl = document.querySelector(".active");
        if(activeEl){
            activeEl.classList.remove("active")
        }
        num.classList.add("active");
    })
})
const ratingSubmit = ()=>{
    const activeEl = document.querySelector(".active");
    if(activeEl){
        const rating = activeEl.innerText
        document.querySelector(".card--subtext").innerText = `You selected ${rating} out of 5`
        document.querySelector(".card__info-start").classList.add("submitted")
    }else{
        document.querySelector(".warning").innerText =`Please choose a rating`
    }
}

document.querySelector(".cta-btn").addEventListener("click", ratingSubmit)