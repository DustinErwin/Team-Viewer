const Engineer = require("../lib/engineer.js");

describe("engineer", () => {
  it("should represent the engineer class", () => {
    const t = {
      name: `Testy McTesterson`,
      id: 0,
      email: `test@gmail.com`,
      role: `Engineer`,
      github: `TestyMcTesterson`,
    };
    const engineer = {
      name: "Testy McTesterson",
      id: 0,
      email: "test@gmail.com",
      role: "Engineer",
      github: `TestyMcTesterson`,
    };

    const result = new Engineer(t.name, t.id, t.email, t.role, t.github);

    expect(result).toEqual(engineer);
  });
});
