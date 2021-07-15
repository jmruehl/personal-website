const btns = document.querySelectorAll('.display-text')
const text = document.querySelectorAll('.hidden')


btns.forEach((el, i) => el.addEventListener('click', event => {
    el.classList.add('hidden')
    text[i].classList.remove('hidden')
    }))