const Blogs = require('./Blogs.js');
const Users = require('./Users.js');
const Comments = require('./Comments.js');

Users.hasMany(Blogs, {
  foreignKey: 'users_id',
});

Users.hasMany(Comments, {
  foreignKey: 'users_id',
});

Blogs.belongsTo(Users, {
  foreignKey: 'users_id',
});

Blogs.hasMany(Comments, {
    foreignKey: 'Blogs_id'
});

Comments.belongsTo(Blogs, {
    foreignKey: 'Blogs_id'
});

Comments.belongsTo(Users, {
    foreignKey: 'users_id'
});

module.exports = { Users, Blogs, Comments };