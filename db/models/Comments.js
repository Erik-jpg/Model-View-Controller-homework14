const { Sequelize, Model, DataTypes } = require('sequelize');
const Sequelize = require('../connection');


class Comments extends Model {
    // validatePassword(password) {
    //     return bcrypt.compare(password, this.password);
        
    // }
}
Comments.init(
    {
        date: {
            timestamp:true,
            updatedAt: false,
            createdAt: 'date'
        },
        content: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    BlogsId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Blogs', 
            key: 'id'
        }
    }
},
{ Sequelize, modelName: 'comments', freezeTableName:true }
    );

// Comments.addHook('beforeCreate', async (user) => {
//     user.password = await bcrypt.hash(user.dataValues.password, 10);
//     return user;
// })



module.exports = Comments;