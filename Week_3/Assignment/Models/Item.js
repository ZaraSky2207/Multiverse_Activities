const {db, DataTypes, Model } = require('../rdb')

class Item extends Model {
    
}

Item.init({
    name: DataTypes.STRING,
}, {
    sequelize: db
})

module.exports = {
    Item
}