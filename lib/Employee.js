class Employee {
    constructor (name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
// returning all of the information from user input.
    getEmployeeName() {
        return this.name;
    }

    getEmployeeID() {
        return this.id;
    }

    getEmployeeEmail() {
        return this.email;
    }
    
    getEmployeeRole() {
        return "Employee";
    }
};

//Exporting the file
module.exports = Employee;