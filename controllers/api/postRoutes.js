const Users = require('../../models/User');
const Posts = require('../../models/Post')
const Comment = require('../../models/Comment')
const router = require('express').Router();
const withAuth = require('../../middleware/auth');

router.post('/timeline-post',  async (req, res) => {
    try {
    const newPost = req.body
    const postCreation = await Posts.create({
        posted_by: req.session.user_id,
        post_content: req.body.post_content,
    })
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

router.post('/comment', async (req,res) => {
    try {
    
    const thisPost = await Posts.findOne({
        where: {
          id: req.session.post_id,
        },
      })

      const newPost = req.body
      const postCreation = await Comment.create({
          on_post: req.session.post_id,
          comment_by: req.session.user_id,
          comment_content: req.body.commentContent,
      })
      

      res.status(200).json(newPost)
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }

})




module.exports = router;