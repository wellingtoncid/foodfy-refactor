const cards = document.querySelectorAll('.card')

const currentPage = location.pathname;
const menus = document.querySelectorAll('.navbar .link');

for (link of menus) {
    if (currentPage.includes(link.getAttribute("href"))) {
        link.classList.add("active");
    }
}

for (let i = 0; i < cards.length; i++) {
    let recipeId = i
    cards[i].addEventListener('click', function () {

        window.location.href = `/recipe/${recipeId}`
    });
}

console.log(document)