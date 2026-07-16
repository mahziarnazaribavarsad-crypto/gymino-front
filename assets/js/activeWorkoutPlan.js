// steps item start

// When the item was finished :

    const startItemLinks = [...document.querySelectorAll('.start-item-link')]
    const stepBoxes = document.querySelectorAll('.steps-box')
    const checkIcons = document.querySelectorAll('.check')

    let currentItem = null

    startItemLinks.forEach(item => {
        item.addEventListener('click' , () => {
            currentItem = startItemLinks.indexOf(item)
            change(currentItem)
        })
    })

    function change(item){
            stepBoxes[item].classList.add('active')
            checkIcons[item].classList.remove('hidden')
    }

// steps item end

// whater glass start

    const plusBtn = document.getElementById('plus-btn')
    let waterNumber = document.getElementById('water-number')
    const minusBtn = document.getElementById('minus-btn')
// Converting the string "whatever number" to a number
    let currentNumber = parseInt(waterNumber.textContent)
//

// The process of adding a number
    plusBtn.addEventListener('click' , () =>{

        currentNumber =  parseInt(waterNumber.textContent = ++currentNumber)

    })
//
// The process of removing a number
    minusBtn.addEventListener('click' , () =>{

        if(currentNumber > 0) {

            currentNumber =  parseInt(waterNumber.textContent = --currentNumber)

        }

    })
//
// water glass end
