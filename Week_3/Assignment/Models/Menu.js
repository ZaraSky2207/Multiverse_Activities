const {db, DataTypes, Model } = require('../rdb')

class Menu extends Model{

}

Menu.init({
    origin: DataTypes.STRING,
}, {
    sequelize: db
})

module.exports = {
    Menu
}