// Variables for node usage
const fs = require("fs");
const inquirer = require("inquirer");

// This is where all of the variables are going to be placed.
const createdHTML = require("./src/createHTML.js");

// Variables for team members and team array
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const workTeamArray = [];

// Add the manager to the team, add to the array, move on to the employees
const addManagerToTeam = () => {
  {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Who is your teams manager?",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("You must enter a managers name to proceed.");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "id",
          message: "Thank you, what is your manager's ID?",
          validate: (nameInput) => {
            if (isNaN(nameInput)) {
              console.log("Please enter the manager's ID!");
              return false;
            } else {
              return true;
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "Thank you, next, what is your manager's email?",
          validate: (email) => {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            if (valid) {
              return true;
            } else {
              console.log("Please enter a valid email address!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "officeNumber",
          message: "Thank you, lastly what is the office number your manager works at?",
          validate: (nameInput) => {
            if (isNaN(nameInput)) {
              console.log("Please enter an office number!");
              return false;
            } else {
              return true;
            }
          },
        },
      ])
      .then((managerInput) => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager(name, id, email, officeNumber);

        workTeamArray.push(manager);
        console.log(manager);
      });
  }
};

// Add employees to the team, add to the array.
const addEmployeesToTeam = () => {
    console.log (`
    *****************************
   *                             *
  *      Add your employees       *    
   *                             *
    *****************************
    `);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Tell me what role this employee holds.",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Thank you! What is the name of your employee?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter an employee's name to proceed!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Thank you! What is your employee's ID number?",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the employee's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Thank you! What is your employee's email address?",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Thank you! What is your employee's github username?",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter the employee's github username!")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Thank you! What is your intern's school name?",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the intern's school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmEmployee',
            message: 'Thank you! Are there any more employees you would like to add to your team?',
            default: false
        }
    ])

    // Creating the employee information from the user input!
    .then(employeeInfo => {
     

        let { name, id, email, role, github, school, confirmEmployee } = employeeInfo; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        workTeamArray.push(employee); 

        if (confirmEmployee) {
            return addEmployeesToTeam(workTeamArray); 
        } else {
            return workTeamArray;
        }
    })

};

// Create the function to generate the HTML page use FS (FileSystem)

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Thank you for answering my questions! Your new team page has been created! Please check out file - index.html when you're ready!");
        }
    })
}; 

addManagerToTeam()
  .then(addEmployeesToTeam)
  .then(workTeamArray => {
    return generateHTML(workTeamArray);
  })
  .then(teamHTML => {
    return writeFile(teamHTML);
  })
  .catch(err => {
 console.log(err);
  });
