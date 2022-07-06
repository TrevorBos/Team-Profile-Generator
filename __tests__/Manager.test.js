// Setting up the manager constructor
const Manager = require('../lib/Manager');

// Starting testing

// Create the manager object
test ("Creates the manager object", () => {
    const manager = new Manager("Trevor", 117, "trevor.bos@outlook.com", 8);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Get the role information
test ("Get the role information", () => {
    const manager = new Manager("Trevor", 117, "trevor.bos@outlook.com", 8);

    expect(manager.getRole()).toEqual("Manager");
});