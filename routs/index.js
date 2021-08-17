const express = require('express');
const exphbs = require('express-handlebars');
const router = express.Router();
const apiRoutes = require('./apiRouts');
const htmlRoutes = require('./htmlRouts');
const User = require('../db/models/Users');
const app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


router.get('/', (req, res) => {
    User.findAll()
    .then(users => {
    res.render('users', {
        users
    });
    })
    .catch(err => console.log(err));
});

router.get('blogs', exphbs({ defaultLayout: 'blog.handlebars' }));
    User.findAll(blog)
    .then(blogs => {
        res.render('blogs', {blog
        });
    })

router.get('comments', exphbs({ defaultLayout: 'comments.handlebars' }));
    User.findAll(comments)
    .then(comments => {
        res.render('comments', {comments
        });
    });

router.use('/', htmlRoutes);
router.use('/api', apiRoutes);

module.exports = router;