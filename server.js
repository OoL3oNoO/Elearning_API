var mysql = require("mysql");
//Database connection
app.use(function (req, res, next) {
  res.locals.connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ' ',
    database: 'test' // host: 'bv47kmafejvofzxhfuc9-mysql.services.clever-cloud.com',
    // user: 'u2g1yn9nujjupsdf',
    // password: 'ioomVSvi0Gaia2izA1Et',
    // database: 'bv47kmafejvofzxhfuc9',
  });
  res.locals.connect();
  next();
});
app.use('/', 'index')
app.use('/api/v1/Contact', contact);
