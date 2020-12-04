const Intern = require("../lib/intern.js");

describe("intern", () => {
  it("should represent the intern class", () => {
    const t = {
      name: `Testy McTesterson`,
      id: 0,
      email: `test@gmail.com`,
      role: `Intern`,
      school: `UNH`,
    };
    const intern = {
      name: "Testy McTesterson",
      id: 0,
      email: "test@gmail.com",
      role: "Intern",
      school: `UNH`,
    };

    const result = new Intern(t.name, t.id, t.email, t.role, t.school);

    expect(result).toEqual(intern);
  });
});
