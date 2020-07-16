const User = require('../models/User')

module.exports = {

    index(req, res) {
        return res.render('home')
    },

    about(req, res) {
        return res.render('about')
    },

    recipes(req, res) {
        return res.render('recipes')
    },

    recipeIndex(req, res) {
        const recipe = data     // Array de receitas carregadas do data.js
        const recipeIndex = req.params.index

        if (!recipe) {
            return res.render('notfound')
        }

        return res.render('recipe')
    }

}