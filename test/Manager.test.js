const Manager = require("../lib/manager.js");

describe("manager", () => {
  it("should represent the manager class", () => {
    const t = {
      name: `Testy McTesterson`,
      id: 0,
      email: `test@gmail.com`,
      role: `Manager`,
      officeNum: `101`,
    };
    const manager = {
      name: "Testy McTesterson",
      id: 0,
      email: "test@gmail.com",
      role: "Manager",
      officeNum: `101`,
    };

    const result = new Manager(t.name, t.id, t.email, t.role, t.officeNum);

    expect(result).toEqual(manager);
  });
});
