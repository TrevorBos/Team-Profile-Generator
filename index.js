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

const addEmployeesToTeam = () => {
    console.log (`
    *****************************
   *     Add your employees     *
    *****************************
    `)
};

// Add employees to the team, add to the array.

// Create the function to generate the HTML page use FS (FileSystem)
