var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'bv47kmafejvofzxhfuc9-mysql.services.clever-cloud.com',
  database: 'bv47kmafejvofzxhfuc9',
  user: 'u2g1yn9nujjupsdf',
  password: 'ioomVSvi0Gaia2izA1Et'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});

connection.end();
