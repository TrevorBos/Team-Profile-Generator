// Setting up the constructor
const Engineer = require("../lib/Engineer");

// Starting the testing

// Create the engineer object
test("This creates the engineer object", () => {
  const engineer = new Engineer(
    "Trevor",
    117,
    "trevor.bos@outlook.com",
    "trevorbos"
  );

  expect(engineer.github).toEqual(expect.any(String));
});

// Get the github information
test("This gets the github information", () => {
  const engineer = new Engineer(
    "Trevor",
    117,
    "trevor.bos@outlook.com",
    "trevorbos"
  );

  expect(engineer.getGithubInfo()).toEqual(
    expect.stringContaining(engineer.github.toString())
  );
});

// Get the role information
test("This gets the role information", () => {
  const engineer = new Engineer(
    "Trevor",
    117,
    "trevor.bos@outlook.com",
    "trevorbos"
  );

  expect(engineer.getRole()).toEqual("Engineer");
});
