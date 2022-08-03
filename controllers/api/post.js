const Users = require('../../models/Users');
const bcrypt = require('bcrypt');
const router = require('express').Router();

router.post('/timeline',  (req, res) => {
    console.log('logic')
})

router.post('/group', (req,res) => {

})

router.post('/friend-request', (req,res) => {

})

router.post('./user', async (req,res) => {
    try {
        const newUser = req.body;
        newUser.password = await bcrypt.has(req.body.password,10);
        const userData = await Users.create(newUser);
        res.status(200).json(userData)
    } catch (err) {
        res.status(400).json(err);
    }

}) 



module.exports = router;