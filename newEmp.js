const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");

inquirer
  .prompt([
    {
      type: "input",
      message: "Employee Name:",
      name: "empName",
    },
    {
      type: "input",
      message: "Employee Email:",
      name: "empEmail",
    },
    {
      type: "list",
      message: "Employee Role:",
      name: "empRole",
      choices: ["Engineer", "Intern", "Manager"],
    },
  ])
  .then((response) => {
    if (response.empRole === "Engineer") {
      inquirer
        .prompt([
          {
            type: "input",
            message: "Employee Github Username:",
            name: "github",
          },
        ])
        .then((r) => {
          const newEngineer = new Engineer(
            r.empName,
            r.empId,
            r.empEmail,
            r.empRole,
            r.github
          );
          console.log(newEngineer);
        });
    }
    console.log(response);
  });
