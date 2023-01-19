const container = document.querySelector(".hero__wish-container ")
const wishInstruction = document.querySelector(".hero__wish-container--info")

const show = () =>{
    container.classList.add("open")
    wishInstruction.classList.add("open")
}

container.addEventListener("click", show)