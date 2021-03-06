const Recipe = require('../models/Recipe')
const { date } = require('../../lib/utils')

module.exports = {
    index(req, res) {

        let { filter, page, limit } = req.query

        page = page || 1
        limit = limit || 2
        let offset = limit * (page - 1)

        const params = {
            filter,
            page,
            limit,
            offset,
            callback(recipes) {

                const pagination = {
                    total: Math.ceil(recipes[0].total / limit),
                    page
                }
                return res.render('admin/recipes/index', { recipes, pagination, filter })
            }
        }

        Recipe.paginate(params)

    },
    create(req, res) {

        const results = Recipe.chefsSelectOption()
        const options = results.rows

        return res.render('admin/recipes/create', { options })
    },
    post(req, res) {
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == '')
                return res.send('Please complete all fields.')
        }

        Recipe.create(req.body, function (recipe) {
            return res.redirect(`/admin/recipes/${recipe.id}`)

        })

    },
    show(req, res) {
        Recipe.find(req.params.id, function (recipe) {
            if (!recipe) return res.send("Recipe not found!")

            recipe.created_at = date(recipe.created_at).format
            // created_at: new Intl.DateTimeFormat("pt-BR").format(foundRecipe.create)

            return res.render("/admin/recipes/show", { recipe })
        })
    },
    edit(req, res) {
        Recipe.find(req.params.id, function (recipe) {
            if (!recipe) return res.send("Recipe not found!")

            return res.render("admin/recipes/edit", { recipe })
        })
    },
    put(req, res) {
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == '')
                return res.send('Please complete all fields.')
        }

        Recipe.update(req.body, function () {
            return res.redirect(`/admin/recipes/${req.body.id}`)
        })

    },
    delete(req, res) {
        Recipe.delete(req.body.id, function () {
            return res.redirect(`/admin/recipes`)
        })
    },
}
