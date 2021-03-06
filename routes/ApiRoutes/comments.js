const express = require('express');
const router = express.Router();
const { Blogs, Users, Comments } = require('../../models');
const withCookie = require('../../config/session');
// const session = require('express-session');

router.post('/posted', withCookie, async (req, res) => {
    try {
        const comment = await Comments.create({
            ...req.body,
            commentId: req.params.userId,
            // Would commentsSql = "INSERT INTO comments ("Here is the comment") Values ('userId', 'email')"; Work?
        });
        res.status(200).json(newComment);
    }catch (error) { 
        res.status(400).json('Sorry, We could not post that comment.', error);
    }
// const everythingRequest = req.body;
// everythingRequest.commentId = req.params.postId;
// const newComment = await Comment.create(req.body).catch((error) => {
//     res.status(500).json('Sorry, We could not post that comment.');
// });
// res.status(201).json(newComment);
});

// router.get('/', async (req, res) => {
//     const comments = await Comments.findAll().catch((error) => {
//         res.status(500).json('Sorry, We could not find any comments.');
//     });
//     res.status(200).json(comments);
// });

module.exports = router;