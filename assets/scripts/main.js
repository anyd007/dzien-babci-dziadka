const container = document.querySelector(".hero__wish-container ")
const wishInstructionBtn = document.querySelector(".hero__wish-container--btn")
const giftBow = document.querySelector(".hero__wish-container--img")
const imgs = [...document.querySelectorAll(".imgs")]
const btns = [...document.querySelectorAll(".btns")]
const modalContainer = document.querySelector(".modal-container")
const modalImg = document.querySelector(".modal-img")
const closeModal = document.querySelector(".modal-icon")
const galleryImagines = document.querySelectorAll(".gallery__images")
const prevSlide = document.querySelector(".prev-slide")
const nextSlide = document.querySelector(".next-slide")

let counter = 0

btns.forEach((btn, btnIndex) => {
    btn.addEventListener("click", () => {
        imgs.forEach((img, imgIndex) => {
            if (btnIndex === imgIndex) {
                modalImg.src = img.src
                modalContainer.classList.add("open")
                document.body.classList.add("stopScroll")
                prevSlide.style.display = "none"
                nextSlide.style.display = "none"
            }
        })
    })
})

imgs.forEach(img => {
    img.addEventListener("click", () => {
        modalImg.src = img.src
        modalContainer.classList.add("open")
        document.body.classList.add("stopScroll")
        prevSlide.style.display = "none"
        nextSlide.style.display = "none"
    })
})

galleryImagines.forEach((imagine, index) => {
    imagine.addEventListener("click", () => {
        modalImg.src = imagine.src
        counter = index
        modalContainer.classList.add("open")
        document.body.classList.add("stopScroll")
        prevSlide.style.display = "block"
        nextSlide.style.display = "block"
        
    })
})

const nextGallertPic = () =>{
    if(counter >= galleryImagines.length -1){
        counter = -1;
    }
    counter++;
    modalImg.src = galleryImagines[counter].src
}

const prevGalleryPic = () =>{
    if(counter <= 0 ){
        counter = galleryImagines.length
    }
    counter--
    modalImg.src = galleryImagines[counter].src
}

const showGift = () => {
    container.classList.add("open")
    wishInstructionBtn.classList.add("open")
    giftBow.classList.add("open")
}

const hideModal = () => {
    modalContainer.classList.remove("open")
    document.body.classList.remove("stopScroll")
}

const options ={

    threshold: 1.0,
    rootMargin: "0px 0px 200px 0px",
   }
const apperOnScroll = new IntersectionObserver((entries, apperOnScroll)=>{
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return
      }
      document.querySelector("#img1").style.opacity = 1
      apperOnScroll.unobserve(entry.target);
     
    })
}, options);
galleryImagines.forEach((galleryImage) => {
apperOnScroll.observe(galleryImage);

});

container.addEventListener("click", showGift)
closeModal.addEventListener("click", hideModal)
nextSlide.addEventListener("click", nextGallertPic)
prevSlide.addEventListener("click", prevGalleryPic)