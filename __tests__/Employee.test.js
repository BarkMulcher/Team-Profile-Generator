const Employee = require('employee');

describe('getRole', () => {
    expect(new Employee("", "", "").getRole()).toBe("Employee")
})