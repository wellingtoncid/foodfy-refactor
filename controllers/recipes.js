const fs = require('fs')
const data = require('../data.json')

exports.index = function (req, res) {
    for (recipe of data.recipes) {
        recipe.id = data.recipes.indexOf(recipe);
    }

    return res.render("admin/recipes/index", { recipes: data.recipes });
}

exports.create = function (req, res) {
    return res.render('admin/recipes/create')
}

exports.show = function (req, res) {
  
    const { id } = req.params
    
    const foundRecipe = data.recipes.find(function (recipes) {
        return recipes.id == id
    })

    if (!foundRecipe) return res.send('Page or recipe not found')

    const recipes = {
        ...foundRecipe,
        created_at: new Intl.DateTimeFormat("pt-BR").format(foundRecipe.create)
    }

    return res.render('admin/recipes/show', { recipes })

}

exports.edit = function (req, res) {

    const { id } = req.params

    const foundRecipe = data.recipes.find(function (recipes) {
        return recipes.id == id
    })

if (!foundRecipe) return res.send('Page or recipe not found')

    const recipes = {
        ...foundRecipe
    }

    return res.render('admin/recipes/edit', { recipes })

}

exports.post = function (req, res) {

    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == '')
            return res.send('Please complete all fields.')
    }


    const created_at = Date.now()
    const id = Number(data.recipes.length + 1)

    data.recipes.push({
        id,
        ...req.body,
        created_at
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if (err) return res.send("Write file error")
        return res.redirect('/admin/recipes/create')
    })

    // return res.send(req.body)
}

exports.put = function (req, res) {
    const { id } = req.body
    let index = 0

    const foundRecipe = data.recipes.find(function (recipe, foundIndex) {
        if (id == recipe.id) {
            index = foundIndex
            return true
        }
    })

    if (!foundRecipe) return res.send('Recipe not found')

    const recipe = {
        ...foundRecipe,
        ...req.body,
        id: Number(foundRecipe.id)
    }

    data.recipes[index] = recipe

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if (err) return res.send("Write file error")

        return res.redirect(`/admin/recipes/${id}`)
    })

}

exports.delete = function (req, res) {
    const { id } = req.body

    const filteredRecipes = data.recipes.filter(function (recipe) {
        return recipe.id != id
    })

    data.recipes = filteredRecipes

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if (err) return res.send("Write file error")

        return res.redirect('/admin/recipes')
    })

}
