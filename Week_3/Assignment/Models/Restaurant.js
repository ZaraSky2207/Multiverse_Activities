const { DataTypes } = require('../../Sequelize/db')
const {db, DataTypes, Model } = require('../db')

class Restaurant extends Model{

}

Restaurant.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
}, {
    sequelize: db
})

module.exports = {
    Restaurant
}