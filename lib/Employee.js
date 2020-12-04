module.exports.Employee = function Employee(name, id, email, role) {
  this.name = name;
  this.id = id;
  this.email = email;
  this.role = role;

  this.getName = () => {
    return this.name;
  };
  this.getId = () => {
    return this.id;
  };
  this.getEmail = () => {
    return this.email;
  };
  this.getRole = () => {
    return this.role;
  };
};
