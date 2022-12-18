// Import and require mysql2 
// This is how to get mysql into JavaScript
const mysql = require("mysql2");

// Connect to database
////// this takes place of opening mysql so you don't have to put it in the CLI
const db = mysql.createConnection(
  {
    host: "localhost", // MySQL username,
    user: "root", // MySQL password
    password: "Password!", // this is where you put your password
    database: "employees_db",
  },
  console.log(`Connected to the employees_db database.`)
);

// Query database
db.query("SELECT * FROM employees", function (err, results) {
  console.log(results);
//   db.end(); // added this to close connection (for homework, don't end here, only close after inquirer questions)
});
/////// this is an asynchronus function because query could take different time to complete. the function part is a callback handler
//// need to close sql connection

module.exports = db; // check if export necessary