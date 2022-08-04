const {Posts} = require('../models')
const {Comment} = require('../models')
const router = require('express').Router();
const withAuth = require('../middleware/auth');
const isLoggedIn = require('../middleware/loggedIn');

router.get('/', isLoggedIn, async (req, res) => {
    try {
        res.status(200).render('landingpage');   
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', isLoggedIn, async (req,res) => {
    try {
        res.status(200).render('login');
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/signup', isLoggedIn, async (req,res) => {
    try {
        res.status(200).render('signup')   
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/home', withAuth,  async (req,res) => {
    try {
        const dbTimelineData = await Posts.findAll({
        });

        const array = dbTimelineData.map((result) =>
        result.get({ plain: true })
    );

        const dataid = []
        const posts = []
        for(let i =0; i<10; i++) {
           let post =  array[Math.floor(Math.random() * array.length)]
           dataid.push(post.id)
            posts.push(post)
        }
        console.log(dataid)
        console.log({posts})
        res.render('home', 
          {posts, dataid},
        );
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });

router.get('/post/:id', async (req,res) => {
    try {
        const dbTimelineData = await Posts.findAll({
        });

            const dbCommentData = await Comment.findAll({
        where: {
            on_post: req.params.id
          },
    });

    const   comments = dbCommentData.map((result) =>
    result.get({ plain: true })
);


        const array = dbTimelineData.map((result) =>
        result.get({ plain: true })
    );
        const { posted_by, post_content } = array[req.params.id - 1]
        req.session.save(()=> {
            req.session.post_id = req.params.id
        })

        res.render('post',{posted_by, post_content,comments} );
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }

})

router.get('/home/:username', async (req,res) => {
    const dbUserData = await Posts.findAll({
      where: {
        posted_by: req.params.username
      }
    });
  
    const posts = dbUserData.map((result) =>
    result.get({ plain: true })
  );
    
  
    res.render('user', 
    {posts},
    );
  })



module.exports = router;