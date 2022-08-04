const Users = require('../../models/User');
const Posts = require('../../models/Post')
const router = require('express').Router();
const withAuth = require('../../middleware/auth');

router.post('/timeline-post', withAuth,  async (req, res) => {
    try {
        const user = Users.findOne({
            where: {id: req.users.id}
          })
    const newPost = req.body
    const postCreation = await Posts.create(user, newPost.post_content)
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





module.exports = router;