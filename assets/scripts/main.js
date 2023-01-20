const container = document.querySelector(".hero__wish-container ")
const wishInstructionBtn = document.querySelector(".hero__wish-container--btn")
const giftBow = document.querySelector(".hero__wish-container--img")

const show = () =>{
    container.classList.add("open")
    wishInstructionBtn.classList.add("open")
    giftBow.classList.add("open")
}

container.addEventListener("click", show)