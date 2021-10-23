const Todo = require('../model/todo');
const router = require('express').Router();

router.get('/', async (req, res)=>{
    try{
        const todo = await Todo.find();
        res.status(200).send(todo);
    }
    catch(e){
        res.status(400).json({
            message: e.message
        })
    }
});

module.exports = router;