// change color footer item after click
const footerCol = document.querySelectorAll(".footer-col")

footerCol.forEach(item => {

    item.addEventListener('click' , () => {

        footerCol.forEach(item => {
            item.classList.remove('text-white')
            item.classList.add('text-[#8E8E93]')
        })

        item.classList.remove('text-[#8E8E93]')
        item.classList.add('text-white')

    })

})
