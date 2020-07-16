const express = require('express')
const routes = express.Router()
const users = require('./app/controllers/users')
const recipes = require('./app/controllers/recipes')
// const chefs = require('./app/controllers/chefs')

// users
routes.get("/", users.index)
routes.get('/about', users.about)
routes.get('/recipes', users.recipes)
routes.get("/recipe/:index", users.recipeIndex)

// server.use(function (req, res) {
//     res.status(404).render("notfound")
// })

// admin/recipes
routes.get("/recipes", recipes.index); // Mostrar a lista de receitas
routes.get("/recipes/create", recipes.create); // Mostrar formulário de nova receita
routes.get("/recipes/:id", recipes.show); // Exibir detalhes de uma receita
routes.get("/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita
routes.post("/recipes", recipes.post); // Cadastrar nova receita
routes.put("/recipes", recipes.put); // Editar uma receita
routes.delete("/recipes", recipes.delete); // Deletar uma receita

// chefs
// routes.get("/chefs", chefs.index)
// routes.get("/chefs/create", chefs.create)
// routes.post('/chefs', chefs.post)
// routes.get("/chefs/:id", chefs.show)
// routes.get("/chefs/:id/edit", chefs.edit)
// routes.put("/chefs", chefs.put)
// routes.delete("/chefs", chefs.delete)

module.exports = routes