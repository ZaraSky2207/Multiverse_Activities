// import
const {db, DataTypes, Model } = require('../') 

// create a child class of Model
class Game extends Model {

}
//create specifics  of the child class 
// creating rows/columns for tables
Game.init({
    name: DataTypes.STRING,
    platform: DataTypes.STRING
}, {
    sequelize: db
})
// export
module.exports = {
    Game
}
