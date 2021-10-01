const user = require('./user')

describe('User Class Datatypes', () =>{
    //username is of type string
test('username should be of type string',() =>{
//create and instance of the class 
const testUser = new user(56789, 'thisIsAPassword', 'cohort@gmail.com',30)
//testUser = {
    //username: 'openCohort123',
    //password: 'thisIsAPassword',
    //email: 'cohort@gmail.com',
    //age: 30
//}
//expect ->
expect(typeof testUser.username).toBe ('string')

describe('User methods testing suite'), () =>
test('checkAge should be True'