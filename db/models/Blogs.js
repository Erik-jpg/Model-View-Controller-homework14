const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');
const bcrypt = require('bcrypt');

class Blogs extends Model {
    validatePassword(password) {
        return bcrypt.compare(password, this.password);
        
    }
}
Blogs.init(
    {
        username: DataTypes.STRING,
        date: DataTypes.INTEGER,
        blogs: DataTypes.STRING,
        comments: DataTypes.STRING
    },
    { sequelize, modelName: 'user' }
);

Blogs.addHook('beforeCreate', async (user) => {
    user.password = await bcrypt.hash(user.dataValues.password, 10);
    return user;
})

module.exports = Blogs;