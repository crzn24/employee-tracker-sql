// Separate file for performing specific SQL queries that I'll need to use. Constructor function or class helpful to organize

const connection = require("./sqlconnect");

class EmployeesDB {

  // first thing is create a reference to the connection on the class in case we need it later - connect to mysql 
  constructor(connection) {
    this.connection = connection;
  }

  // method to show all employees - This will find all employees, join with roles and departments to display their roles, salaries, departments, and managers
  findAllEmployees() {
    return this.connection.promise().query(
        "SELECT * FROM employee;"
    );
  }

  // method to add employee

  // method to update employee role

  // method to show all roles

  // method to add role

  // method to show all departments

  // method to add department



  // Make sure to use .promise() on each connection inside each method
}

module.exports = new EmployeesDB(connection);