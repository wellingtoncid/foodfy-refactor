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

// button hide 

const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', function () {

        const class_name = button.className.split(' ')[0];
        const hide = document.querySelector(`.${class_name}_`);

        if (button.classList.contains('hide')) {
            button.textContent = 'ESCONDER';
            button.classList.remove('hide');
            hide.classList.remove('hide');
        } else {
            button.textContent = 'MOSTRAR';
            button.classList.add('hide');
            hide.classList.add('hide');
        }
    })
}