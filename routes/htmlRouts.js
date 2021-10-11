const express = require("express");
const router = express.Router();
const { Users, Blogs, Comments } = require("../models");

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

router.get("/:userName/:password", async (req, res) => {
    try {
        const username = req.params.username;
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

router.get("/signin", (req, res) => {
    res.render("sign-in");
});

router.get("/comments/:commentId", async (req, res) => {
    const dbComments = await Comments.findOne({
        where: {
            id: req.params.commentId,
        },
        include: [{ model: Users }, { model: Comment }],
    }).catch((error) => {
        res.status(500).json("Sorry, We could not save your comments.");
    });
});

// router.get('/index/:userName/:username/dashboard', (req, res) =>{
//     res.sendFile(path.join(_dirname, '../views/layout/dashboard'));
// });

module.exports = router;
