// write test && test a test
//import database + models
const { db } = require('./db')

//import our models from the index file because we created the associations
const { Game, User } = require('./index')

//write our test value 
describe('Videogame collection database', () => {

    //clear out or database
    //beforeAll() <- a jest method that will run something before we invoke any tests
    //use async keyword - to run- because we don't know how long it will tak
    beforeAll(async () => {
        await db.sync({
            force: true //clears out all entries in all of our tables in our db
        })
    })
    // make sure we can create entries in our tables (rows)
    Test('can create a game', async () => {
        //create a row in the Game Table
    //.create
        const testGame = await Game.create({ name: 'Final Fantasy', platform: 'PS1'})
        expect(testGame.name).toBe('Final Fantasy')
        expect(testGame.platform).toBe('PS1')
    })

    Test('cabn create a user', async () => {
    const testUser = await User.create({username: 'PopCorners', gamesCollected: 'Temple Run,Toy Blast,Candy Crush,Sonic'})
    expect(testUser.username).toBe('Popcorners')
    // string manipulation
    //how can I access'games collected - write a test to figure out how many games does a user have 
    let games = testUSer.gamesCollected.split(',').length

    expect(testUser.gamesCollected).toBe(4)

    })

test('User can have many games', () => {
    // create a user instance 
        const newPlayer = await  User({ username: 'gypsysky', gamesCollected: ''})
    // create game instances
    const runner = await  Game({ name: 'runner', platform: 'ps1'})
    const blaster = await  Game({ name: 'blaster', platform: 'iphone' })
    const freezer = await  Game({ name: 'freezer', platform: 'iphone' })

    //magic methods where we can associate data from one table to another
    //.add_nameOfTable__

    await newPlayer.addGame(runner)
    await newPlayer.addGame(blaster)
    await newPlayer.addGame(freezer)

    //magic methods to retrieve all the games from the user 
    //.get_nameOfTable__(s) <-make it plural
    const games= await newPlayer.getGames()

    expect(games.length).toBe(3)

})



})
