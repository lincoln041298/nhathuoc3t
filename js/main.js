
const closeMenuBtn = document.querySelector('.button-close') //closenav mobile
const openMenuBtn = document.querySelector('.button-open') //opennav  mobile
const dropDown = document.querySelector('.choosen-health__ver2') //dropdown mobile


openMenuBtn.addEventListener('click', function() {
    dropDown.classList.add('d-open')
})

closeMenuBtn.addEventListener('click', function() {
    dropDown.classList.remove('d-open')
})


//set date
const date =  document.getElementById('date');
date.innerHTML = new Date().getFullYear();

//scroll to top
const toTop = document.getElementById("scroll-top");

window.addEventListener('scroll', function() {
    if(window.pageYOffset > 50) {
        toTop.classList.add('scroll-active');
    } else {
        toTop.classList.remove('scroll-active');
    }
})