const {Posts} = require('../models')
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

router.get('/home', withAuth, async (req,res) => {
    try {
        const dbTimelineData = await Posts.findAll({
        });

        const array = dbTimelineData.map((result) =>
        result.get({ plain: true })
    );

        const posts = []
        for(let i =0; i<10; i++) {
           let post =  array[Math.floor(Math.random() * array.length)]
            posts.push(post)
        }

        console.log({posts})
        res.render('home', 
          {posts},
        );
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });



module.exports = router;