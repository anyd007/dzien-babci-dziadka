const container = document.querySelector(".hero__wish-container ")
const wishInstructionBtn = document.querySelector(".hero__wish-container--btn")
const giftBow = document.querySelector(".hero__wish-container--img")
const imgs = [...document.querySelectorAll(".imgs")]
const btns = [...document.querySelectorAll(".btns")]
const modalContainer = document.querySelector(".modal-container")
const modalImg = document.querySelector(".modal-img")
const closeModal = document.querySelector(".modal-icon")
const galleryImagines = [...document.querySelectorAll(".gallery__images")]

btns.forEach((btn, btnIndex) => {
    btn.addEventListener("click", () => {
        imgs.forEach((img, imgIndex) => {
            if (btnIndex === imgIndex) {
                modalImg.src = img.src
                modalContainer.classList.add("open")
                document.body.classList.add("stopScroll")
            }
        })
    })
})

galleryImagines.forEach(imagine =>{
    imagine.addEventListener("click", () =>{
        modalImg.src = imagine.src
        modalContainer.classList.add("open")
        document.body.classList.add("stopScroll")
    })
})

imgs.forEach(img => {
    img.addEventListener("click", () => {
        modalImg.src = img.src
        modalContainer.classList.add("open")
        document.body.classList.add("stopScroll")
    })
})

const showGift = () => {
    container.classList.add("open")
    wishInstructionBtn.classList.add("open")
    giftBow.classList.add("open")
}

const hideModal = () => {
    modalContainer.classList.remove("open")
    document.body.classList.remove("stopScroll")
}

container.addEventListener("click", showGift)
closeModal.addEventListener("click", hideModal)