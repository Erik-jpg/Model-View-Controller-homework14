const express = require('express')
const router = express.Router()
const apiRoutes = require('./apiRouts');
const htmlRoutes = require('./htmlRouts');
const User = require('../db/models/Users')




router.use('/', htmlRoutes);
router.use('/api', apiRoutes);

module.exports = router;