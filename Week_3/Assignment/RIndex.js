const { db, DataTypes, Model } = require('./db')

const { Item } = require('./Models/Item')
const { Menu } = require('./Models/Menu')
const { Resturaunt  } = require('./Models/Resturaunt')



Resturaunt.belongsTo(Menu)
Menu.hasMany(Resturaunt)

Resturaunt.belongsTo(Item)
Item.hasMany(Resturaunt)

module.exports { Item, Menu, Resturaunt }