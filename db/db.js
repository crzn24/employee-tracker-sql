// Separate file for performing specific SQL queries that I'll need to use. Constructor function or class helpful to organize

const db = require("./sqlconnect");

class dbEmployees {

  // connect to mysql  
  constructor(db) {
    this.db = db;
  }

  // method to show all employees
  showAllEmployees() {
    return this.db;
  }

  // method to add employee

  // method to update employee role

  // method to show all roles

  // method to add role

  // method to show all departments

  // method to add department



  
}
