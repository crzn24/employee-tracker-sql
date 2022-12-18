// Dependencies
const inquirer = require('inquirer');
const db = require('./db/index')

function init() {
    
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
    ]);
}

// Some way to call function when a choice is selected by user

// Function to View All Employees
// Function to Add Employee
// Function to Update Employee Role
// Function to View All Roles
// Function to Add Role
// Function to View All Departments
// Function to Add Department



// Quit the app and close connection    
function quit() {
    db.end(); 
}





//////////////// Challenge 10 employee tracker homework reference  ///////////
// // Dependencies
// const inquirer = require('inquirer');
// const fs = require("fs");
// const jest = require('jest');

// // Constructors 
// const Employee = require('./lib/Employee');
// const Manager = require('./lib/Manager');
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');

// // to render html page
// const render = require('./src/html-template');

// // empty array for team members
// const teamArray = [];




// function init() {

//     // add a manager when starting up
//     function addManager() {
//         console.log("Let's put together a team!");
//         inquirer.prompt([
//             {
//                 type: "input",
//                 name: "managerName",
//                 message: "What is the team manager's name?",
//                 validate: answer => {
//                     if (answer !== "") {
//                         return true;
//                     }
//                     return "Please enter the team manager's name."
//                 }
//             },
//             {
//                 type: "input",
//                 name: "managerId",
//                 message: "What is the team manager's ID?",
//                 validate: answer => {
//                     if (answer !== "") {
//                         return true;
//                     }
//                     return "Please enter a valid ID for the manager.";
//                 }  
//             },
//             {
//                 type: "input",
//                 name: "managerEmail",
//                 message: "What is the team manager's email?",
//                 validate: answer => {
//                     if (answer !== "") {
//                         return true;
//                     }
//                     return "Please enter an email address for the manager.";
//                 }  
//             },
//             {
//                 type: "input",
//                 name: "managerOfficeNumber",
//                 message: "What is the team manager's office number?",
//                 validate: answer => {
//                     if (answer !== "") {
//                         return true;
//                     }
//                     return "Please enter an office number.";
//                 }  
//             }
//         ]).then(answers => {
//             const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
//             teamArray.push(manager); //push to array
//             addTeamMember(); //add someone else
//         });
//     }



//     // add additional team members to the team
//     function addTeamMember() {
//         inquirer.prompt([
//             {
//                 type: "list",
//                 name: "teamChoice",
//                 message: "Which type of team member would you like to add?",
//                 choices: [
//                     "Engineer",
//                     "Intern",
//                     "I'm done adding team members."
//                 ]
//             },
//         ]).then(userChoice => {
//             switch(userChoice.teamChoice) {
//                 case "Engineer":
//                     addEngineer();
//                     break;
//                 case "Intern":
//                     addIntern();
//                     break;
//                 default: 
//                     generateHTML();

//             }
//         });
//     }


//     // function to add engineer if chosen
//     function addEngineer() {
//         inquirer.prompt([
//             {
//                 type: "input",
//                 name: "engineerName",
//                 message: "What is the engineer's name?",
//                 validate: answer => {
//                     if (answer !== "") {
//                         return true;
//                     }
//                     return "Please enter the engineer's name.";
//                 }
//             },
//             {
//                 type: "input",
//                 name: "engineerId",
//                 message: "What is the engineer's ID?",
//                 validate: answer => {
//                     if (answer !== "") {
//                         return true;
//                     }
//                     return "Please enter a valid ID for the engineer.";
//                 }
//             },
//             {
//                 type: "input",
//                 name: "engineerEmail",
//                 message: "What is the engineer's email?",
//                 validate: answer => {
//                     if (answer !== "") {
//                         return true;
//                     }
//                     return "Please enter an email address for the engineer.";
//                 }
//             },
//             {
//                 type: "input",
//                 name: "engineerGithub",
//                 message: "What is the engineer's GitHub username?",
//                 validate: answer => {
//                     if (answer !== "") {
//                         return true;
//                     }
//                     return "Please enter a GitHub username for the engineer.";
//                 }
//             }
//         ]).then (answers => {
//             const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
//             teamArray.push(engineer); //push to array
//             addTeamMember(); //add another team member
//         });
//     }



//     // function to add intern if chosen
//     function addIntern() {
//         inquirer.prompt([
//             {
//                 type: "input",
//                 name: "internName",
//                 message: "What is the intern's name?",
//                 validate: answer => {
//                     if (answer !== "") {
//                         return true;
//                     }
//                     return "Please enter the intern's name.";
//                 }
//             },
//             {
//                 type: "input",
//                 name: "internId",
//                 message: "What is the intern's ID?",
//                 validate: answer => {
//                     if (answer !== "") {
//                         return true;
//                     }
//                     return "Please enter a valid ID for the intern.";
//                 }
//             },
//             {
//                 type: "input",
//                 name: "internEmail",
//                 message: "What is the intern's email?",
//                 validate: answer => {
//                     if (answer !== "") {
//                         return true;
//                     }
//                     return "Please enter an email address for the intern.";
//                 }
//             },
//             {
//                 type: "input",
//                 name: "internSchool",
//                 message: "What is the intern's school?",
//                 validate: answer => {
//                     if (answer !== "") {
//                         return true;
//                     }
//                     return "Please enter a school for the intern.";
//                 }
//             }
//         ]).then (answers => {
//             const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
//             teamArray.push(intern); //push to array
//             addTeamMember(); //add another team member
//         });
//     }




//     // function to generate HTML page
//     function generateHTML() {
//         console.log("Creating your team...");
//         fs.writeFile('./dist/index.html', render(teamArray), function(err) {
//             if (err) throw err;
//             console.log('Your team is saved!');
//         });
//     }

//     // function writeToFile(fileName, data) {
//     //     fs.writeFile(fileName, data, (err) =>
//     //     err ? console.error(err) : console.log("Here is your README!"));
//     // }

//     // .then((answers) => {
//     //     const template = (render(answers));
//     //     const filename = `${answers.filename}.md`
//     //     generateHTML(filename, template);

//     addManager();

// }

// init();