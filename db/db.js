// Separate file for performing specific SQL queries that I'll need to use. Constructor function or class helpful to organize

const db = require("./sqlconnect");

class dbEmployees {

  // first thing is create a reference to the connection on the class in case we need it later - connect to mysql 
  constructor(db) {
    this.db = db;
  }

  // method to show all employees - This will find all employees, join with roles and departments to display their roles, salaries, departments, and managers
  findAllEmployees() {
    return this.db.promise().query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
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

module.exports = db;