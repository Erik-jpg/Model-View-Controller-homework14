const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// const bcrypt = require('bcrypt');

class Blogs extends Model {}
Blogs.init(
    {
        title:{ 
            type: DataTypes.STRING,
            allowNull: false 
        },
        id: { 
            type: DataTypes.INTEGER, 
            primaryKey:true,
            allowNull:false, 
            autoIncrement: true,
        },
        content: {
            type: DataTypes.STRING,
             allowNull: false
            },
        userId: { 
            type: DataTypes.INTEGER,
             references: {
                 model: 'user',
                  key: 'id'
                }
    },
},

    { sequelize, modelName: 'Blogs', freezeTableName: true }
);

module.exports = Blogs;