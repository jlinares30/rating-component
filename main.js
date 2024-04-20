let cardSubmit = document.querySelector('.card-container-submit')
let cardThanks = document.querySelector('.card-container-thanks')
let numbers = document.querySelectorAll('.numbers')
let submit = document.querySelector('.submit')
let numberSelected = document.querySelector('#number-selected')
let originalBackgroundColor = '#959eac34'
let originalNumberColor = '#959eac'
let ratingSelected
   
    numbers.forEach(number =>{
        number.addEventListener('click',()=>{
            ratingSelected = number.textContent
            number.style.backgroundColor = '#fa7312'
            number.style.color = 'white'
            numbers.forEach(num =>{
                if(num != number){
                    num.style.backgroundColor = originalBackgroundColor
                    num.style.color = originalNumberColor
                }
            })
            console.log(ratingSelected)
        })
    })
submit.addEventListener('click',()=>{
    if(!isNaN(ratingSelected)){
        cardSubmit.hidden = true
        cardThanks.hidden = false
        numberSelected.textContent = ratingSelected
    }
})