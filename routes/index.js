
const router = require('express').Router();
const apiRoutes = require("./ApiRoutes");
const htmlRoutes = require("./htmlRouts");







router.use("/", htmlRoutes);
router.use("/api", apiRoutes);

module.exports = router;
