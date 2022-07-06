// We want to import the employee information
const Employee = require('./Employee');

// The intern constructor should build off of the employee information

class Intern extends Employee {
    constructor(name, id, email, school) {
        // Should now call the employee constructor using SUPER
        super (name, id, email);

        // Then add the school information
        this.school = school;
    }

    // Now get the school information from input, as well as the role
    
    getSchoolInfo() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;
