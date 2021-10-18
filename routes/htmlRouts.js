// const express = require("express");
const router = require('express').Router();
const { Users, Blogs, Comments } = require("../models");
const withCookie = require('../config/session');

router.get('/', async (req, res) => {
    try {
        const blogsData = await Blogs.findAll({
            include: [{ model: Users }, { model: Comments }]
        })
        console.log(blogsData);
        const blogs = blogsData.map((blog) =>
            blog.get({ plain: true })
        )
        console.log(blogs);
        res.render('home-page', {
            blogs,
            loggedIn: req.session.loggedIn
        })
    } catch (error) {
        console.log(error);
        res.status(500).json('Sorry We were unable to find the Blogs. ' + error);
    }
});

router.get('/dashboard', async (req, res) => {
    try {
        // query all blogs by           it is either userId
        const blogsData = await Blogs.findAll({ where: {userId: req.session.userId}})
        const blogs = blogsData.map((blog) =>
            blog.get({ plain: true })
        )
        console.log(blogs);
        res.render('dashboard', {
            blogs,
            loggedIn: req.session.loggedIn
        })
    } catch (error) {
        console.log(error);
    }
})

router.get("/posted/:id", async (req, res) => {
    try {
        const blogsData = await Blogs.findByPk(req.params.id, {
            include: [{
                model: Users,
                attributes: ['name'],
        },
    ],
});
        const dbComments = await Comments.findAll({
            include: {
                model: Users,
                model: Comments,
            },
        })
    } catch (error) {
        res.status(500).json("Sorry, We could not find any comments.");
    }
    });

    router.get('/posted', async (req, res) => {
        try {
            res.render('posted')
            const commentsData = await Comments.findAll({ where: {userId: req.session.userId}});

        } catch (error) {
            console.log(error);
        }
    })


    router.get("/signin", (req, res) => {
        res.render("sign-in");
    });

    router.get('/logout' , async (req, res) => {
        res.render('sign-in');
    })


//     const user = await Users.findOne({
//         where: { username: req.params.username },
//     }).catch((error) => {
//         res
//             .status(500)
//             .json("Sorry We lost little Timmy, aka, We cannot find that user.");
//     });

//     if (user) {
//         const usersId = user.isSoftDeleted;
//         const dbUsersComments = await Comments.findAll({
//             where: {
//                 usersId: usersId,
//             },
//         }).catch((error) => {
//             res.status(500).json("Sorry, We cannot find any Comments.");
//         });
//     }

//     if (dbComments) {
//         const allComments = dbComments.map((comment) =>
//             comment.get({ plain: true })
//         );
//     }

//     if (dbUserComments) {
//         const userComments = dbUserComments.map((comment) =>
//             comment.get({ plain: true })
//         );
//         res.render("homepage", {
//             userId,
//             allComments,
//             userComments,
//             loggedIn: req.session.loggedIn,
//         });
//     } else {
//         const allComments = [];
//         const userComments = [];
//         res.render("homepage", {
//             userId,
//             allComments,
//             userComments,
//             loggedIn: req.session.loggedIn,
//         });
//     }
//     const comments = dbcomments.get({ plain: true });

//     res.render("post", {
//         post,
//         loggedIn: req.sessions.loggedIn,
//     });
// });



// router.get("/comments/:commentId", async (req, res) => {
//     const dbComments = await Comments.findOne({
//         where: {
//             id: req.params.commentId,
//         },
//         include: [{ model: Users }, { model: Comment }],
//     }).catch((error) => {
//         res.status(500).json("Sorry, We could not save your comments.");
//     });
// });

// router.get('/index/:userName/:username/dashboard', (req, res) =>{
//     res.sendFile(path.join(_dirname, '../views/layout/dashboard'));
// });

module.exports = router;
