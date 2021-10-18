const router = require('express').Router();
const postedRoutes = require('../ApiRoutes/comments');
const blogRoutes = require('../ApiRoutes/blogs');
const usersRoutes = require('../ApiRoutes/users');



router.use('/posted', postedRoutes);
router.use('/users', usersRoutes);
router.use('/blogs', blogRoutes);

module.exports = router;