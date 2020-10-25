const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB,
});

connection.connect();

connection.query('SELECT * FROM wrestlers where wrestlers.forename = "Colby"', (error, results) => {
  if (error) console.log(error);
  console.log('The solution is: ', results[0]);
});

connection.end();
