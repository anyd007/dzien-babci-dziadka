const container = document.querySelector(".container")

const show = () =>{
    container.classList.add("active")
}

container.addEventListener("click", show)