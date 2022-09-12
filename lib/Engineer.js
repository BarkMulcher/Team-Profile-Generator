// this class needs to inherit from the employee class

const Employee = require("./Employee");

// properties:
//      name
//      id
//      email 
//      github - GitHub username
// methods:
//      getName()
//      getId()
//      getEmail()
//      getGithub()
//      getRole() - overrides & returns 'Engineer'

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Engineer";
    }

    getGitHub() {
        return this.github;
    }
};


module.exports = Engineer;