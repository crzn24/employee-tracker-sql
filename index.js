// Dependencies
const inquirer = require('inquirer');
const { addEmployee } = require('./db/db');
const db = require('./db/db');
require('console.table');


// Initial Function 
function init() {
    askQuestions();
}

// Function to ask questions
function askQuestions() {
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "Add Employee",
                "Update Employee Role",
                "View All Roles",
                "Add Role",
                "View All Departments",
                "Add Department",
                "Quit"
            ]
        }
    ]).then(res => {
        let choice = res.choice;
        // call function based on user selected choice in command line
        switch(choice) {
            case ("View All Employees"):
                viewAllEmployees();
                break;
            case ("Add Employee"):
                addNewEmployee();
                break;
            case ("Update Employee Role"):
                updateEmployeeRole();
                break;
            case ("View All Roles"):
                viewAllRoles();
                break;
            case ("Add Role"):
                addNewRole();
                break;
            case ("View All Departments"):
                viewAllDepartments();
                break; 
            case ("Add Department"):
                addNewDepartment();
                break;
            default:
                quit();
        }
    })
}

// Way to call function when a choice is selected by user



// Function to View All Employees
function viewAllEmployees() {
    db.findAllEmployees()
    .then(([rows]) => {
        let employees = rows;
        console.log("\n"); // Adds space between prompt and table in command line 
        console.table(employees);
    }).then(() => askQuestions());
} 

// Function to Add Employee
function addNewEmployee() {
    inquirer.prompt([
       {
            name:"first_name",
            message: "What is the employee's first name?"
       },
       {
            name:"last_name",
            message: "What is the employee's last name?"
       }
    ]) .then(res => {
            let firstName = res.first_name;
            let lastName = res.last_name;
        db.findAllRoles()
        .then(([rows]) => {
            let roles = rows;
            const roleChoices = roles.map(({id, title}) => ({
                name: title,
                value: id
            }));
            inquirer.prompt({
                type: "list",
                name: "roleId",
                message: "What is the employee's role?",
                choices: roleChoices
            })
            .then(res => {
                let roleId = res.roleId;

                db.findAllEmployees()
                .then(([rows]) => {
                    let employees = rows;
                    const managerChoices = employees.map(({id, first_name, last_name}) => ({
                        name: `${first_name} ${last_name}`,
                        value: id
                    }));

                    managerChoices.unshift({name: "None",value: null});

                    inquirer.prompt({
                        type: "list",
                        name: "managerId",
                        message: "Who is the employee's manager?",
                        choices: managerChoices
                    }) .then(res => {
                        let employee = {
                            manager_id: res.managerId,
                            role_id: roleId,
                            first_name: firstName,
                            last_name: lastName
                        }

                        db.addEmployee(employee);
                    }) .then(() => console.log(
                        `Added ${firstName} ${lastName} to the database`
                    )) .then(() => askQuestions())

                })
            })
        })
    })
};

// Function to Update Employee Role
function updateEmployeeRole() {
    db.findAllEmployees()
        .then(([rows]) => {
            let employees = rows;
            const employeeChoices = employees.map(({id, first_name, last_name}) => ({
                name: `${first_name} ${last_name}`,
                value: id
            }));

            inquirer.prompt([
                {
                    type: "list",
                    name: "employeeId",
                    message: "Which employee's role do you want to update?",
                    choices: employeeChoices
                }
            ])
                .then(res => {
                    let employeeId = res.employeeId;
                    db.findAllRoles()
                        .then(([rows]) => {
                            let roles = rows;
                            const roleChoices = roles.map(({id, title}) => ({
                                name: title,
                                value: id
                            }));

                            inquirer.prompt([
                                {
                                    type: "list",
                                    name: "roleId",
                                    message: "Which role do you want to assign the selected employee?",
                                    choices: roleChoices
                                }
                            ])
                                .then(res => db.updateEmployeeRole(employeeId, res.roleId))
                                .then(() => console.log("Updated employee's role"))
                                .then(() => askQuestions())
                        });
                });
        })
}

// Function to View All Roles
function viewAllRoles() {
    db.findAllRoles()
    .then(([rows]) => {
        let roles = rows;
        console.log("\n"); 
        console.table(roles);
    }).then(() => askQuestions());
}

// Function to Add Role
function addNewRole() {
    db.findAllDepartments()
    .then(([rows]) => {
        let departments = rows;
        const departmentChoices = departments.map(({id, name}) =>({
            name: name,
            value: id
        }))
        
        inquirer.prompt([
            {
                name: "title",
                message: "What is the name of the role?"
            },
            {
                name: "salary",
                message: "What is the salary of the role?"
            },
            {
                type: "list",
                name: "department_id",
                message: "Which department does the role belong to?",
                choices: departmentChoices
            }
        ]) .then(role => {
                db.addRole(role)
                .then(() => console.log(`Added ${role.title} to the database`))
                .then(() => askQuestions())
        })

    })

}

// Function to View All Departments
function viewAllDepartments() {
    db.findAllDepartments()
    .then(([rows]) => {
        let departments = rows;
        console.log("\n"); 
        console.table(departments);
    }).then(() => askQuestions());
}

// Function to Add Department
function addNewDepartment() {
    // inquirer.prompt
    db.addDepartment()
    .then(([rows]) => {
        let departments = rows;
        console.log("\n"); // 
        console.table(departments);
    }).then(() => askQuestions());
} //input, ask user for name, name: "name"



// Quit the app and close connection    
function quit() {
    // db.end(); 
    process.exit();
}



init();