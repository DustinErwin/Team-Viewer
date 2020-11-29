const Employee = require("./Employee");

const renderHtml = function () {
  const jim = new Employee("Jim", 1, "derwin69@gmail.com", "Employee");
  console.log(jim.getEmail());
  console.log(`this is from the html renderer`);
};

module.exports = renderHtml();
