
// Display most recent (=last) entry of log book on top of page

const logEntries = document.querySelectorAll('.log-entry')
const insertMostRecentEntry = document.querySelector('#insert-text')

insertMostRecentEntry.innerHTML = logEntries[logEntries.length -1].innerHTML



//Display full text of log book entry


const btns = document.querySelectorAll('.display-text')
const fullText = document.querySelectorAll('.hidden')

btns.forEach((el, i) => el.addEventListener('click', event => {
    el.classList.add('hidden')
    fullText[i].classList.remove('hidden')
    }))