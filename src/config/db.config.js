require('dotenv').config()
module.exports = {
  host: process.env.HOST,
  user: process.env.LOGIN,
  password: process.env.PASSWORD,
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE
}