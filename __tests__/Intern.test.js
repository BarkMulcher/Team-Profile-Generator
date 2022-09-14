const Intern = require('../lib/Intern');
const intern = new Intern('Morpheus', '7', 'Morphdawg@email.com', 'S. Hartford Institute of Tech');

describe('Intern', () => {
    it('should create engineer profile from input', () => {
        expect(intern).toEqual({name: 'Morpheus', id: '7', email: 'Morphdawg@email.com', school: 'S. Hartford Institute of Tech'})
    })
})