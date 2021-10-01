const Passenger = require('./Passenger')

describe('Passenger Class Datatypes', () => {
    test('name should be of type string', () => {
        const testPassenger = new Passenger('zara', 52389857585, '27A')
        expect(typeof testPassenger.name).toBe('string')
    })
}) 