const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Alfalfa', '3', 'alfalfa.sprout@email.com', 'github.com/alfy');

describe('Engineer', () => {
    it('should create engineer profile from input', () => {
        expect(engineer).toEqual({name: 'Alfalfa', id: '3', email: 'alfalfa.sprout@email.com', github: 'github.com/alfy'})
    })
})