// import employee class
const Employee = require("./Employee");

// extend engineer class from employee class
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