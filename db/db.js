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
        // "SELECT * FROM employee;"
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
    );
  }

  // method to add employee
  addEmployee(employee) {
    return this.connection.promise().query(
        "INSERT INTO employee SET ?", employee
    ); 
  }

  // method to update employee role
  updateEmployeeRole(roleId, employeeId) {
    return this.connection.promise().query(
        "UPDATE employee SET role_id = ? WHERE id = ?",
        [roleId, employeeId]
    );
  }

  // method to show all roles
  findAllRoles() {
    return this.connection.promise().query(
        // "SELECT * FROM role;"
        "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;"
    );
  }

  // method to add role
  addRole(role) {
    return this.connection.promise().query(
        "INSERT INTO role SET ?", role
    );
  }

  // method to show all departments
  findAllDepartments() {
    return this.connection.promise().query(
        "SELECT * FROM department;"
    );
  }

  // method to add department
  addDepartment(department) {
     return this.connection.promise().query(
        "INSERT INTO department SET ?", department
    );
  } // could pass in data into addDepartment, then in string instead of department do {name: data.name}


  ////////// Make sure to use .promise() on each connection inside each method //////////
}

module.exports = new EmployeesDB(connection);