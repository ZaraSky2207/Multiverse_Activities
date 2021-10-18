const {db, DataTypes, Model } = require('../db')

class User extends Model {

}

User.init({

    username: DataTypes.STRING,
    //gamesCollected: DataTypes.STRING
        sequelize: db
})

module.exports = {
    User
}
