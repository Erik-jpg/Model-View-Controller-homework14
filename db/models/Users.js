const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');
const bcrypt = require('bcrypt');

class User extends Model {
    validatePassword(password) {
        return bcrypt.compare(password, this.password);
        
    }
}
User.init(
    {
        username:{ 
            type: DataTypes.STRING, 
            allowNull:false, 
            unique:true 
        },
        password:{ 
            type: DataTypes.STRING,
             allowNull:false
        },
    },
    { Sequelize, modelName: 'users', freezeTableName: true }
);

User.beforeCreate(async (user) => {
    bcryptedPassword = await user.bcrypt.hash(user.dataValues.password, 10);
    console.log(err);
});
users.password = bcryptedPassword;

module.exports = Users;

