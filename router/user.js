const router = require('express').Router();

router.get('/', async (req,res)=>{
    res.send('This')
})

module.exports = router