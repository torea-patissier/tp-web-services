const mysql = require("mysql");
const dbConfig = require("../config/db.config");

const connection = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
  port: dbConfig.port
});

connection.connect(error => {
  if (error) throw error;
  console.log("Connection à la BDD avec succès.");
});

module.exports = connection;
