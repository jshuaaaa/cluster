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

router.get('/home',  async (req,res) => {
    try {
        res.status(200).render('home');
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;