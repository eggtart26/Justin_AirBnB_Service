const {Pool, Client} = require("pg")

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'airbnbcarousel',
  password: '', //password
  port: 5432
})


module.exports = pool;