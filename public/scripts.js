const cards = document.querySelectorAll(".card")

for (let i = 0; i < cards.length; i++) {
    let recipeId = i
    cards[i].addEventListener('click', function () {

        window.location.href = `/recipe/${recipeId}`
    });
}

// link selected header
const currentPage = location.pathname;
const menus = document.querySelectorAll('.navbar .link');

for (link of menus) {
    if (currentPage.includes(link.getAttribute("href"))) {
        link.classList.add("active");
    }
}

// button show 

const show = document.querySelectorAll(".show")
const info = document.querySelectorAll(".info")

for (let i = 0; i < show.length; i++) {
    show[i].addEventListener("click", function () {
        if (show[i].textContent == "Esconder") {
            show[i].textContent = "Mostrar";
            info[i].classList.add("hide");
        }
        else {
            show[i].textContent = "Esconder";
            info[i].classList.remove("hide");
        }
    })
}
// add ingredient

function addIngredient() {

    const ingredients = document.querySelector(".ingredients");
    const fieldContainer = document.querySelectorAll(".ingredient");

    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

    if (newField.children[0].value == "") return false;

    newField.children[0].value = "";
    ingredients.appendChild(newField);
}

document.querySelector(".add-ingredient").addEventListener("click", addIngredient);

// add preparation

function addPreparation() {
    const preparations = document.querySelector(".preparations");
    const fieldContainer = document.querySelectorAll(".preparation");

    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

    if (newField.children[0].value == "") return false;

    newField.children[0].value = "";
    preparations.appendChild(newField);
}

document.querySelector(".add-prepare").addEventListener("click", addPreparation);