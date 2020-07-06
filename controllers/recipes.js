const fs = require('fs')
const data = require('../data.json')



exports.create = function (req,res) {
    return res.render('admin/recipes/create')
}

exports.post = function (req, res) {

    const keys = Object.keys(req.body)

    for (key of keys) {
            if (req.body[key] == '')
            return res.send('Please complete all fields.')
    }

    let { image, title, author, ingredients, preparation, information } = req.body

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