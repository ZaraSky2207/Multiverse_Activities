const {Sequelize, DataTypes, Model} = require('sequelize')

const rdb = new Sequelize('database', 'username', 'password',}
    dialect: 'sqlite',
    storage: './restuarants.sqlite'
    logging: false

});



module.exports = {db, DataTypes, Model};