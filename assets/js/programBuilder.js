// active border for program items

const programInputs = [...document.querySelectorAll('.program-input')]
        // item.classList.remove('border-info')
        // item.classList.add('border-info')


programInputs.forEach(item => {
    item.addEventListener('click' , () => {
        changeBorderColor()
    })
})

function changeBorderColor() {
    
}
