const express = require('express');
const exphbs = require('express-handlebars');
const router = express.Router();
const apiRoutes = require('./apiRouts');
const htmlRoutes = require('./htmlRouts');
const User = require('../db/models/Users');
const app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


router.get('/users', (req, res) => {
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

    //pulling data from users
    let { username, email } = userData;
//insert into table
    blog.create({ 
        username,
        password,
        blogs,
        comments
    })


    //pulling data out of the object
    let { Title, Date, Content } = blogData;
//insert into blogTable
blog.create({ 
    username,
    Title,
    Date,
    content
})

    //pulling data form comments
    let { Title, Date, Content } = commentsData;
//insert into commentsTable
blog.create({ 
    username,
    Title,
    Date,
    comments
})


router.use('/', htmlRoutes);
router.use('/api', apiRoutes);

module.exports = router;