
const Recipe = require('../models/Recipe')

module.exports = {

    index(req, res) {

        // const results = Recipe.all(search = false)
        // const recipes = results.rows

        // let recipesPop = recipes.filter(function (recipe) {
        //     return recipes.indexOf(recipe) < 6
        // })

        return res.render('users/home')
    },

    about(req, res) {
        return res.render('users/about')
    },

    recipes(req, res) {
        return res.render('users/recipes')
    },

    recipeIndex(req, res) {
        const recipe = data     // Array de receitas carregadas do data.js
        const recipeIndex = req.params.index

        if (!recipe) {
            return res.render('notfound')
        }

        return res.render('users/recipe')
    }

}