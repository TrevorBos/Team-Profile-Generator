// We want to import the employee information
const Employee = require("./Employee");

// Manager constructor will be using the employee information just like everything else
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // Once again calling the employee information with SUPER
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  //override employee role to manager with the getRole method
  getRole() {
    return "Manager";
  }
}

// Exporting
module.exports = Manager;
