const router = require('express').Router();
const User = require('../model/user')

router.get('/', async (req,res)=>{
    res.send('This')
})

router.post('/register', (req,res)=>{
    try{
        

        res.status(200).json(user)
    }
    catch(e){
        res.status(400).json({
            message: e.message
        })
    }
})

module.exports = router;