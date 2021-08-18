const express = require('express');
const exphbs = require('express-handlebars');
const router = express.Router();
const apiRoutes = require('./apiRouts');
const htmlRoutes = require('./htmlRouts');
const User = require('../db/models/Users');
const Comments = require('../db/models/Comments');
const Blog = require('../db/models/Blogs');
const app = express();

//({ defaultLayout: 'main' }));




router.get('/users', (req, res) => {
    User.findAll()
    .then(users => {
    res.render('users', {
        users
    });
    })
    .catch(err => console.log(err));
});

router.get('/blogs', exphbs({ defaultLayout: 'blog.handlebars' }));
    User.findAll()
    .then(blogs => {
        res.render('blogs', {Blog
        });
    })

router.get('/comments', exphbs({ defaultLayout: 'comments.handlebars' }));
    User.findAll()
    .then(comments => {
        res.render('comments', {Comments
        });
    });

    //pulling data from users
    // let { username, password, usersBlog, usersComments } = userData;
//insert into table
    // User.create({ 
    //     username,
    //     password,
    //     usersBlogs,
    //     usersComments
    // })


    //pulling data out of the object
    // let { Title, Date, Content } = blogData;
//insert into blogTable
// Blog.create({ 
//     username,
//     Title,
//     Date,
//     content
// })

    //pulling data form comments
    // let { commentsTitle, commentsDate, commentsContent } = commentsData;
//insert into commentsTable
// Comments.create({ 
//     username,
//     commentsTitle,
//     commentsDate,
//     commentsContents
// })


router.use('/', htmlRoutes);
router.use('/api', apiRoutes);

module.exports = router;