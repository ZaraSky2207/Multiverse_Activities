const {db, DataTypes, Model } = require('./db')
}

const { Music } = require('./Models/Music')
const { User } = require('./Models/User')


Music.belongsTo(User)
User.hasMany(Music)
module.exports = { Music, User}