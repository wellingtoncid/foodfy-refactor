const fs = require('fs')
const data = require("../data.js")


exports.index = function (req, res) {
    return res.render('admin/recipes', { admin })
}

exports.create = function (req,res) {
    return res.render('admin/recipes/create')
}

