const { Blogs, Users, Comments } = require('../db/models');
const sequelize = require('../db/connection');
const blogsSeeds = require('./posts.json');
const usersSeeds = require('./users.json');
const commentsSeeds = require('./comments.json');


const populateDb = async () => {
    await sequelize.sync({ force: true });
    await Users.bulkCreate(usersSeeds);
    await Blogs.bulkCreate(blogsSeeds);
    await Comments.bulkCreate(commentsSeeds);
    process.exit(0);
}

populateDb();