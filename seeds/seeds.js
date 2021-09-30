const { Blogs, Users, Comments } = require('../models');
const sequelize = require('../config/connection');
const blogsSeeds = require('./apiBlogs.json');
const usersSeeds = require('./apiUsers.json');
const commentsSeeds = require('./comments.json');


const populateDb = async () => {
    await sequelize.sync({ force: true });
    await Users.bulkCreate(usersSeeds);
    await Blogs.bulkCreate(blogsSeeds);
    await Comments.bulkCreate(commentsSeeds);
    process.exit(0);
}

populateDb();

