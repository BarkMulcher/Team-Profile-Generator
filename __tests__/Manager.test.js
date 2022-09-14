const Manager = require('../lib/Manager');
const manager = new Manager('Luke', '222', 'luke@email.com', '1');

describe('Manager', () => {
    it('should create new employee profile from input', () => {
        expect(manager).toEqual({name: 'Luke', id: '222', email: 'luke@email.com', officeNumber: '1'});
    })
}) 