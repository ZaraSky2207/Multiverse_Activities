//import our database, DataTypes,Model
//import our models 

const {db, DataTypes, Model } = require('./db')
 
//Import files
const { Game } = require('./Models/Game')
const { User } = require('./Models/User')

//Build bridge by creating a relationship = association between tables 
// ex .belongsTo //.hasMany//

Game.belongsTo(User) //creates a foreign key on the Game table that indicates the associated User
User.hasMany(Game) // creating a relationship going back 

// export the models with these assosciations 

module.exports = { Game, User }