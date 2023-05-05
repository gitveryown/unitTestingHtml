const toggle = document.querySelector('a.toggleMenu')
const main = document.querySelector('main')


toggle.addEventListener('click', function (){
    main.classList.toggle('open')

    if (main.classList.contains('open')){
        toggle.innerHTML = `<img src="images/close.svg">Close `
    }
    else {
        toggle.innerHTML = `<img src="images/bars-solid.svg">Menu `
    }
})