// We want to import the Employee information
const Employee = require("./Employee");

// Engineer constructor will build off the employee information just like the intern one did
class Engineer extends Employee {
  constructor(name, id, email, github) {
    //once again calling the employee information with SUPER
    super(name, id, email);

    //Add in the github information
    this.github = github;
  }

  // Get the github information from the user input
  getGithubInfo() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

// Exporting
module.exports = Engineer;