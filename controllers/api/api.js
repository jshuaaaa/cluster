const router = require('express').Router();
const posts = require('./post.js');

router.use("/post", posts);

module.exports = router;