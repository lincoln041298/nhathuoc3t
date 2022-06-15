
const closeMenuBtn = document.querySelector('.button-close') //dong
const openMenuBtn = document.querySelector('.button-open') //mo 
const dropDown = document.querySelector('.choosen-health__ver2') //do xuong


// closeMenuBtn.addEventListener('click', function() {
//     dropDown.classList.remove('.hidden')
//     dropDown.classList.add('.hidden')
// })

openMenuBtn.addEventListener('click', function() {
    dropDown.classList.add('d-open')
})

closeMenuBtn.addEventListener('click', function() {
    dropDown.classList.remove('d-open')
})