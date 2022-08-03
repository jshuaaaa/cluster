const Users = require('../../models/User');
const Posts = require('../../models/Post')
const bcrypt = require('bcrypt');
const router = require('express').Router();

router.post('/timeline-post',  async (req, res) => {
    try {
    const newPost = req.body
    const postCreation = await Posts.create(newPost)
    res.status(200).json(newPost)
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
})

router.post('/group', async (req,res) => {

})

router.post('/friend-request', async (req,res) => {

})

router.post('/user', async (req,res) => {
    try {
        const newUser = req.body;
        newUser.password = await bcrypt.hash(req.body.password,10);
        const userData = await Users.create(newUser);
        res.status(200).json(userData)
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }

}) 





module.exports = router;