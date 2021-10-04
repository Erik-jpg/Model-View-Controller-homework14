const Blogs = require('./Blogs.js');
const Users = require('./Users.js');
const Comments = require('./Comments.js');

Users.hasMany(Blogs, {
  foreignKey: 'userId',
});

Users.hasMany(Comments, {
  foreignKey: 'userId',
});

Blogs.belongsTo(Users, {
  foreignKey: 'userId',
});

Blogs.hasMany(Comments, {
    foreignKey: 'blogsId'
});

Comments.belongsTo(Blogs, {
    foreignKey: 'blogsId'
});

Comments.belongsTo(Users, {
    foreignKey: 'userId'
});

module.exports = { Users, Blogs, Comments };