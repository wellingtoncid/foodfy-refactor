
const { Pool } = require('pg')

module.exports = new Pool({
    user: 'postgres',
    password: "$ucesso.10",
    host: "localhost",
    port: 5432,
    database: "foodfy"
})