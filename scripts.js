const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function(){
        const imgId = card.querySelector('img').getAttribute('id')
        const recipe = card.children[1].textContent
        const author = card.children[2].textContent

        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = `./assets/${imgId}.png`

        modal.querySelector('.modal-recipe h1').innerHTML = recipe
        modal.querySelector('.modal-author p').innerHTML = author
    })
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
})