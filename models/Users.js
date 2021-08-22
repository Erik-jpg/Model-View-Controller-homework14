const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Users extends Model {
    validatePassword(password) {
        return bcrypt.compare(password, this.password);
        
    }
}
Users.init(
    {
        username: { 
            type: DataTypes.STRING, 
            allowNull:false, 
            unique:true 
        },
        password: { 
            type: DataTypes.STRING,
             allowNull:false
        },
    },
    { sequelize, modelName: 'Users', freezeTableName: true }
);

Users.beforeCreate(async (Users) => {
    bcryptedPassword = await user.bcrypt.hash(user.dataValues.password, 10);
    console.log(err);
});
 bcryptedPassword = Users.password;

module.exports = Users;

