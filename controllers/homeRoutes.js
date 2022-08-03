const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/home');
        return;
    }
    
    res.render('landingpage');
});

router.get('/login', async (req,res) => {
    if (req.session.logged_in) {
        res.redirect('/home');
        return;
    }
    
    res.render('login')
})

router.get('/signup', async (req,res) => {
    if (req.session.logged_in) {
        res.redirect('/home');
        return;
    }
    
    res.render('signup')
})

router.get('/home', withAuth, async (req,res) => {
    res.render('home')
})

module.exports = router;