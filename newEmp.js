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
  .then((r) => {
    const newEngineer = new Engineer(
      r.empName,
      r.empId,
      r.empEmail,
      r.empRole,
      r.github
    );
    let oldRoster = [];
    let rawdata = fs.readFileSync("./output/roster.json");
    let oldRoster = JSON.parse(rawdata);
    console.log(oldRoster);
    // let roster = `${oldRoster}, "${r.empName}": ${newEngineer}`;
    // fs.writeFileSync("./output/roster.json", JSON.stringify(roster));
    // console.log(roster);
  });
'
'