const router = require('express').Router();
const commentRoutes = require('../ApiRoutes/comments');
const blogRoutes = require('../ApiRoutes/blogs');
const usersRoutes = require('../ApiRoutes/users');



router.use('/comments', commentRoutes);
router.use('/users', usersRoutes);
router.use('/blogs', blogRoutes);

module.exports = router;