// Setup the creation of the manager section

// create Manager card
const createManagerCard = function (manager) {
  return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class="material-icons">content_paste</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
};

// Setup the creation of the Engineer section
const createEngineerCard = function (engineer) {
  return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
};

// Setup the creation of the Intern
const createInternCard = function (intern) {
  return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="material-icons">assignment_ind</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `;
};

// Pushing the array information to the page

createdHTML = (data) => {
  //card array for different employees
  cardArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const employeeRole = employee.getRole();

    // call the create manager function

    if (employeeRole === "Manager") {
      const userManager = createManagerCard(employee);
      cardArray.push(userManager);
    }
    // call the engineer function
    if (employeeRole === "Engineer") {
      const userEngineer = createEngineerCard(employee);
      cardArray.push(userEngineer);
    }
    // call the intern function
    if (employeeRole === "Intern") {
      const userIntern = createInternCard(employee);
      cardArray.push(userIntern);
    }
  }

  // Join the strings together for the employees

  const userEmployees = cardArray.join("");

  // RETUN for the generated page
  const userTeam = createTeamPage(userEmployees);
  return userTeam;
};
