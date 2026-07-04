// slider
const prevBtn = document.querySelector('.prev')
const skipBtn = document.querySelector('.skip')
const sliders = document.querySelectorAll('.slider-slide')

let currentSlide = 0

prevBtn.addEventListener('click' , () => {
    changeSlide(currentSlide - 1)
})

function changeSlide(newIndex) {
    if(newIndex >= sliders.length ) {
        newIndex = 0
    }
    if(newIndex < 0 ) {
        newIndex = sliders.length - 1
    }
    sliders[currentSlide].classList.remove('active')
    sliders[newIndex].classList.add('active')
    currentSlide = newIndex
}
