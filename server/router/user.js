const router = require('express').Router();
const User = require('../model/user');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth')
const bcrypt = require('bcrypt');
require('dotenv').config()

router.get('/', auth, async (req,res)=>{
    res.send('This')
})

router.post('/register', async (req,res)=>{
    try{
        var user = await User.findOne({
            email: req.body.email
        });

        if(user)
            throw new Error('User already exist');

        user = new User(req.body);
        await user.save();

        res.status(200).json(user)
    }
    catch(e){
        res.status(400).json({
            message: e.message
        })
    }
});

router.post('/login', async (req,res)=>{
    try{
        const user = await User.findOne({
            email : req.body.email
        })

        if(!user)
            throw new Error('No User Found')
        const isMatch = await bcrypt.compare(req.body.password, user.password);

        if(!isMatch)
            throw new Error('Wrong Email/Password');

        const token = jwt.sign({ email: user.email }, process.env.TOKEN_SECRET)
            
        res.status(200).send({
            token
        })

    }
    catch(e){
        res.status(400).json({
            message: e.message
        })
    }
})

module.exports = router;