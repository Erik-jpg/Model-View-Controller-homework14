const express = require('express')
const router = express.Router()
const apiRoutes = require('./apiRouts');
const htmlRoutes = require('./htmlRouts');
const User = require('../db/models/Users')

//handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
router.get('/', (req, res) => {
    User.findAll()
    .then(blogs => {console.log(blogs)
    res.sendStatus(200);
    })
    .catch(err => console.log(err));
});


router.use('/', htmlRoutes);
router.use('/api', apiRoutes);

module.exports = router;