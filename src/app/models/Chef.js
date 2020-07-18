const db = require('../../config/db')
const { date } = require('../../lib/utils')

module.exports = {

    all() {

        const query =
            `
            SELECT chefs.*, count(recipes) AS total_recipes
            FROM chefs 
            LEFT JOIN recipes ON (recipes.chef_id = chefs.id)
            GROUP BY chefs.id
            ORDER BY id ASC 
        `

        return db.query(query)
    },

    create(data, callback) {

        const query = `
            INSERT INTO chefs (
                name,
                created_at
            ) VALUES ($1, $2)
            RETURNING id
        `

        const values = [
            data.name,
            date(Date.now()).iso
        ]

        db.query(query, values, function (err, results) {
            if (err) throw `Erro ao cadastrar chef! ${err}`

            callback(results.rows[0])
        })
    },

    find(id) {

        const query =
            `
            SELECT chefs.*, count(recipes) AS total_recipes
            FROM chefs
            LEFT JOIN recipes ON (recipes.chef_id = chefs.id)
            WHERE chefs.id = ${ id}
            GROUP BY chefs.id
        `

        return db.query(query)
    },

    chefRecipes(id) {

        return db.query(`SELECT * FROM recipes WHERE chef_id = ${id}`)

    },

    update(data, callback) {

        const query = `
        UPDATE chefs SET
        name = ($1)
        WHERE id = ${ data.id}
        `

        const values = [
            data.name,
        ]

        db.query(query, values, function (err, results) {
            if (err) throw `Erro ao atualizar chef! ${err}`

            callback()
        })
    },

    delete(id) {

        return db.query(`DELETE FROM chefs WHERE id = ${id}`)
    },
}