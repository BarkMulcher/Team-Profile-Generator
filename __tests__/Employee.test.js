const Employee = require('../lib/Employee');
const employee = new Employee('Luke', '222', 'lucas.c.haskell@email.com');

describe('get constructor values for new employee', () => {
    it('Can check new employee input', () => {
    expect(employee.name).toBe('Luke');
    expect(employee.id).toBe('222');
    expect(employee.email).toBe('lucas.c.haskell@email.com');
})
});