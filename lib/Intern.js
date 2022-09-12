// this class needs to inherit from the employee class
// import the parent class:
const Employee = require('./Employee');

// properties:
//      name
//      id
//      email 
//      school
// methods:
//      getName()
//      getId()
//      getEmail()
//      getSchool
//      getRoles() - overrides & returns 'Intern'

class Intern extends Employee {
    constructor(name, id, email, school) {
        // call parent constructor
        super(name, id, email);
        this.school = school;
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

    // override role to Intern
    getRole() {
        return "Intern";
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;