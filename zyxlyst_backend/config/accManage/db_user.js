const mysql = require('mysql2')

const userDB = mysql.createPool({
  host: 'localhost',
  user: 'admin',
  password: 'zyxlyst250626',
  database: 'users',
  charset: 'utf8mb4'
}).promise()

module.exports = userDB
