const path = require('path')
const fs = require('fs').promises


const {db} = require('./db')
const { User } = require('./Models/index')
const { Show } = require('./Models/index')




const seed = async () => {

    await db.sync({ force: true}); 


    const seedPath = path.join(__dirname, 'User.json');
    const showSeedPath = path.join(__dirname, 'Show.json');


    const buffer = await fs.readFile(seedPath);
    const buffer1 = await fs.readFile(showSeedPath);


    const {data} = JSON.parse(String(buffer));
    const {showData} = JSON.parse(String(buffer1));

    const userPromises = data.map(user => User.create(user));
    await Promise.all(userPromises);


    const showPromises = showData.map(show => Show.create(show));
    await Promise.all(showPromises);

    console.log("Shows populated!")
}

module.exports = seed;