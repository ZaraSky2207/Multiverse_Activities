const {Sequelize, DataTypes, Model} = require('sequelize') 

//create  an instance of a sequalize Class 

const db = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite', // What kind of SQL database are we working with
    storage:'./games.sqlite' //the name of the file of our database
    logging: false // terminal will be flooded with additional information about our db
})

//export database
module.exports ={db, DataTypes, Model}
