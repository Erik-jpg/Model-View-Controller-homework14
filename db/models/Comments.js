const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');
const bcrypt = require('bcrypt');

class Comments extends Model {
    validatePassword(password) {
        return bcrypt.compare(password, this.password);
        
    }
}
Comments.init(
    {
        username: DataTypes.STRING,
        date: DataTypes.INTEGER,
        blogs: DataTypes.STRING,
        comments: DataTypes.STRING
    },
    { sequelize, modelName: 'user' }
);

Comments.addHook('beforeCreate', async (user) => {
    user.password = await bcrypt.hash(user.dataValues.password, 10);
    return user;
})

module.exports = Comments;