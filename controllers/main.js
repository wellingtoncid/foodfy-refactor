const data = require('../data.json')

exports.index = function (req, res) {
    return res.render('home', { recipes: data.recipes })
}

exports.about = function (req, res) {
    return res.render('about')
}

exports.recipes = function (req, res) {
    return res.render('recipes', { recipes: data.recipes })
}

exports.recipeIndex = function (req, res) {
    const recipe = data     // Array de receitas carregadas do data.js
    const recipeIndex = req.params.index

    if (!recipe) {
        return res.render('notfound')
    }

    return res.render('recipe', { recipes: data.recipes[recipeIndex] })
}

// server.use(function (req, res) {
//     res.status(404).render("notfound")
// })