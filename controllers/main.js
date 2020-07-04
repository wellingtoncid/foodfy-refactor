const data = require("../data.js")

exports.index = function (req, res) {
    return res.render('home', { items: data })
}

exports.about = function (req, res) {
    return res.render('about')
}

exports.recipes = function (req, res) {
    return res.render('recipes', { items: data })
}

exports.recipeIndex = function (req, res) {
    const recipe = data  // Array de receitas carregadas do data.js
    const recipeIndex = req.params.index

    if (!recipe) {
        return res.render('notfound')
    }

    return res.render('recipe', { item: data[recipeIndex] })
}

// server.use(function (req, res) {
//     res.status(404).render("notfound")
// })