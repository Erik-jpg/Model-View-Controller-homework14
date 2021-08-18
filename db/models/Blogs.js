const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../connection');
// const bcrypt = require('bcrypt');

class Blogs extends Model {}
Blogs.init(
    {
        title:{ 
            type: DataTypes.STRING,
            allowNull: false 
        },
        date: { 
            timestamp:true, 
            updatedAt:false, 
            createdAt: 'date'
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