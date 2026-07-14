// active border for program items

const programInputs = [...document.querySelectorAll('.program-input')]

programInputs.forEach(item => {
    item.addEventListener('click' , () => {
        programInputs.forEach(item => {
            item.classList.remove('border-secondaryText')
        })
         item.classList.add('border-secondaryText')
    })
})
