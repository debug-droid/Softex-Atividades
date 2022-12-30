const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nomedoBanco', 'root', 'senha', {
  host: 'localhost',
  dialect: 'mysql',
})

module.exports = sequelize