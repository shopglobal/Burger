var mysql = require('mysql');	

var connection = mysql.createConnection({
  host: "198.199.101.74",
  port: 3306,
  user: "mark",
  password: "!mark$",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
 
var initialize = function() {
connection.query('SELECT * FROM burgers', function (error, results, fields) {
  if (error) throw error;
  console.log(fields);
  console.log(results);
  console.log('Connected to MySQL');
});
}
initialize();
module.exports = connection;