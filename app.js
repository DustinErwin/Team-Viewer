const inquirer = require("inquirer");

const fs = require("fs");
const Employee = require("./lib/Employee.js");

const html = require("./lib/htmlRenderer.js");

fs.readFile("./output/roster.json", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});


