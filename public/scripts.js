const cards = document.querySelectorAll('.card')

for (let i = 0; i < cards.lenght; i++ ) {
    let recipeId = i
    cards[i].addEventListener('click', function () {
        window.location.href = `/recipe/${recipeId}`
    })
}