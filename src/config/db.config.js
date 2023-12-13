const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 8889,
  database: 'tp-web-services'
});
connection.connect();
let query = ``;
connection.query(query, (error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
connection.end();