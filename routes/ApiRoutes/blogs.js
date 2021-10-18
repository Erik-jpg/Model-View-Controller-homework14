const router = require('express').Router();

// const Users = require('../../models/Users');
const Blogs = require('../../models/Blogs');
const withCookie = require('../../config/session')

// document.querySelector('postBlogBtn');
computeBlogsPost = async () => {
postBlogBtn.addEventListener('click', () =>{
router.post('/', withCookie, async (req, res) => {
    try {
        const newBlog = await Blogs.crate({
            ...req.body,
            userId: req.sessions.userId,
        });
        res.status(200).json(newBlog);
    } catch (error) {
        console.log('made it into post route ', error);
        res.status(400).json(error);
    }
});
});
}

// router.get('/:username', withCookie, async (req, res) => {
//     try {
//     const user = await User.findOne({
//         where: {username: req.params.username},
//     }).catch((error) => {
//         res.status(500).json('Sorry We lost the User, please try again.');
//     });
//     if (user) {
//         const usersId = users.id;
//         if (usersId) {
//             const blogs = await Blogs.findAll({
//                 where: {usersId: usersId,},
//             }).catch((error) => {
//                 res.status(500).json('Sorry all your blogs are Ours now.');
//             });
//             res.status(200).json(blogs);
//         }
//     }else {
//         res.status(404).json('Sorry We cannot find that users blogs.');
//     }
// });

// router.post('/posted', async (req, res) => {
//     const newBlog = await Blogs.create(req.body).catch((error) => {
//         res.status(500).json('Sorry we were unable to post that Blog.');
//     });
//     res.status(201).json(newBlog);
// });

module.exports = router;