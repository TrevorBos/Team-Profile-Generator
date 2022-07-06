// Setting up the constructor
const Intern = require("../lib/Intern");

// Starting the tests

//Create the intern object

test("This creates an intern object", () => {
  const intern = new Intern("Trevor", 117, "trevor.bos@outlook.com", "UofT");

  expect(intern.school).toEqual(expect.any(String));
});

// Get the school information

test("This gets the school information", () => {
  const intern = new Intern("Trevor", 117, "trevor.bos@outlook.com", "UofT");

  expect(intern.getSchoolInfo()).toEqual(
    expect.stringContaining(intern.school.toString())
  );
});

// Get the role information

test("This gets the role information", () => {
    const intern = new Intern("Trevor", 117, "trevor.bos@outlook.com", "UofT");
    
    expect(intern.getRoleInfo()).toEqual("Intern");
});
