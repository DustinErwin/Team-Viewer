const Employee = require("../lib/Employee.js");

describe("employee", () => {
  it("should represent the base employee class", () => {
    const t = {
      name: `Testy McTesterson`,
      id: 0,
      email: `test@gmail.com`,
      role: `Engineer`,
    };
    const employee = {
      name: "Testy McTesterson",
      id: 0,
      email: "test@gmail.com",
      role: "Engineer",
    };

    const result = new Employee(t.name, t.id, t.email, t.role);

    expect(result).toEqual(employee);
  });
});
