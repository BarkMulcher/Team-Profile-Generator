// this class needs to inherit from the employee class
// import the parent class:
const Employee = require('./Employee');

// create `Manager` class that extends "Employee" class:
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // call parent constructor:
        super(name, id, email);
        this.officeNumber = officeNumber;
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

    // override role to Manager
    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
    
};


module.exports = Manager;