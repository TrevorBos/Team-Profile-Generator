//setting up the constructor
const Employee = require('../lib/Employee');

//starting the tests

//create the employee object

test("This creates an employee object", () => {
    const employee = new Employee ("Trevor", 117, "trevor.bos@outlook.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});