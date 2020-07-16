const db = require('../../config/db')
const { date } = require('../../lib/utils')

module.exports = {

    all(search) {

        let query = ""
        querySearch = ""

        if (search) {

            querySearch = `
            WHERE recipes.title ILIKE '%${ search}%'
            `
        }

        query = `SELECT recipes.*, chefs.name AS chef_name
        FROM recipes
        LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
        ${ querySearch}
        ORDER by id DESC
        `

        return db.query(query)
    },

    create(data) {

        const query = `
            INSERT INTO recipes (
                chef_id,
                image,
                title,
                ingredients,
                preparation,
                information,
                created_at
            ) VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING id
        `

        const values = [
            data.chef_id,
            data.image,
            data.title,
            data.ingredients,
            data.preparation,
            data.information,
            date(Date.now()).iso
        ]

        return db.query(query, values)
    },

    find(id) {

        const query =
            `
            SELECT recipes.*, chefs.name AS chef_name
            FROM recipes 
            LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
            WHERE recipes.id = ${ id}
        `

        return db.query(query)
    },

    chefsSelectOption() {

        return db.query(`SELECT name, id FROM chefs`)
    },

    update(data) {

        const query = `
        UPDATE recipes SET
        chef_id = ($1),
        image = ($2)
        title = ($3),
        ingredients = ($4),
        preparation = ($5),
        information = ($6)
        WHERE id = ${data.id}
        `

        data.ingredients = data.ingredients[0].split(",")
        data.preparation = data.preparation[0].split(",")

        const values = [
            data.chef_id,
            data.image,
            data.title,
            data.ingredients,
            data.preparation,
            data.information
        ]

        return db.query(query, values)

    },

    delete(id) {

        return db.query(`DELETE FROM recipes WHERE id = ${id}`)
    },
}