// footer buttons
const messageBtnIcon = document.querySelector('.message-btn i')
const heartBtnIcon = document.querySelector('.heart-btn i')


// message button active
messageBtnIcon.addEventListener('click' , () => {
    messageBtnIcon.classList.toggle('fa-regular')
    messageBtnIcon.classList.toggle('fa-solid')
})

// heart button active
heartBtnIcon.addEventListener('click' , () => {
    heartBtnIcon.classList.toggle('fa-regular')
    heartBtnIcon.classList.toggle('fa-solid')
})
