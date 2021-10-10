
const { Sequelize } = require('sequelize');
require('dotenv').config(); 

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USERNAME, 
    process.env.DB_PASSWORD, 
    {
    host: 'localhost',
    dialect: 'mysql',
    port: 5000
}
);
}

module.exports = sequelize;