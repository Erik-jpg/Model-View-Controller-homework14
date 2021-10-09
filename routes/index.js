const express = require("express");
const exphbs = require("express-handlebars");
const router = express.Router();
const apiRoutes = require("./apiRouts");
const htmlRoutes = require("./htmlRouts");
const { Users, Blogs, Comments } = require("../models");
// const Comments = require('../models/Comments');
// const Blog = require('../models/Blogs');
const index = require("../models");
const app = express();

//({ defaultLayout: 'main' }));

router.get("/users", (req, res) => {
  Users.findAll()
    .then((users) => {
      res.render("home-page", {
        Users,
      });
    })
    .catch((err) => console.log(err));
});


router.get("/blogs", (req, res) => {
// exphbs({ defaultLayout: "blog.handlebars" }));
Users.findAll().then((blogs) => {
  res.render("blogs", { Blogs });
})});

router.get("/comments", (req, res) => {
// exphbs({ defaultLayout: "comments.handlebars" }));
Users.findAll().then((comments) => {
  res.render("comments", { Comments });
})});

//pulling data from users
// let { username, password, usersBlog, usersComments } = userData;
//insert into table
// Users.create({
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

router.use("/", htmlRoutes);
router.use("/api", apiRoutes);

module.exports = router;
