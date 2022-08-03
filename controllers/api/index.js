const router = require('express').Router();
const posts = require('./post');

router.use("/post", posts);

module.exports = router;