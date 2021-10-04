const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Comments extends Model {
    // validatePassword(password) {
    //     return bcrypt.compare(password, this.password);
        
    // }
}
Comments.init(
    {
        // date: {
        //     type: DataTypes.STRING,
        //     timestamp:true,
        //     updatedAt: false,
        //     createdAt: 'date'
        // },
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
    blogsId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Blogs', 
            key: 'id'
        }
    },
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey:true,
        allowNull:false, 
        autoIncrement: true,

    },
},
{ sequelize, modelName: 'comments', freezeTableName:true }
    );

// Comments.addHook('beforeCreate', async (user) => {
//     user.password = await bcrypt.hash(user.dataValues.password, 10);
//     return user;
// })



module.exports = Comments;