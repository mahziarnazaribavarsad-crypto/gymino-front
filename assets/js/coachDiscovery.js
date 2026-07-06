// change color nav items
const  headerNavItem= document.querySelectorAll(".header-nav-item")

headerNavItem.forEach(item => {

    item.addEventListener('click' , () => {

        headerNavItem.forEach(item => {
            item.classList.remove('text-white' , 'bg-[#1C1C1E]')
            item.classList.add('text-[#8E8E93]')
        })

        item.classList.remove('text-[#8E8E93]')
        item.classList.add('text-white' , 'bg-[#1C1C1E]')

    })

})

// change color save btn

const saveBtnsIcon = document.querySelectorAll('.save-btn i')

saveBtnsIcon.forEach(item => {

    item.addEventListener('click' , () => {

        item.classList.toggle('fa-solid')
        item.classList.toggle('text-black')

    })

})
