//setting up the constructor
const Employee = require("../lib/Employee");

//starting the tests

//create the employee object

test("This creates an employee object", () => {
  const employee = new Employee("Trevor", 117, "trevor.bos@outlook.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

//Grab the employee name

test("This will grab the employee name", () => {
  const employee = new Employee("Trevor", 117, "trevor.bos@outlook");

  expect(employee.getEmployeeName()).toEqual(expect.any(String));
});

// Grab the employee ID number

test("This will grab the employee ID number", () => {
  const employee = new Employee("Trevor", 117, "trevor.bos@outlook");

  expect(employee.getEmployeeID()).toEqual(expect.any(Number));
});

// Grab the employee email

test("This will grab the employee email", () => {
  const employee = new Employee("Trevor", 117, "trevor.bos@outlook");

  expect(employee.getEmployeeEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});

// Grab the employee role

test("This will grab the employee role", () => {
    const employee = new Employee("Trevor", 117, "trevor.bos@outlook");

    expect(employee.getRole()).toEqual("Employee");
});
