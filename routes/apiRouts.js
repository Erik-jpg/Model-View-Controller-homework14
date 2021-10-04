const express = require("express");
const { Users, Blogs, Comments } = require("../models");
const router = express.Router();

router.get("/users", async (req, res) => {
  const allUsers = await Users.findAll();
  res.json(allUsers);
});

router.post("/users", async (req, res) => {
  const newUser = await Users.create(req.body);
  res.status(201).json(newUser);
});

router.get("/users/sign-in/:username", async (req, res) => {
  const user = await Users.findOne({ where: { username: req.params.username } });
  const validated = await user.validatePassword(req.body.password);
  res.json(validated);
});
module.exports = router;
