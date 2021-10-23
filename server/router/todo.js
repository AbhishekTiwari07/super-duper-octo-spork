const Todo = require('../model/todo');
const router = require('express').Router();
const auth = require('../middleware/auth')

router.get('/', auth, async (req, res)=>{
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

router.post('/addTask', async, (req,res)=>{
    try{
        const todo = new Todo(req.body);

        const result = await todo.save();

        res.status(200).send(
            result
        )
    }
    catch(e){
        res.status(400).json({
            message: e.message
        })
    }
})

router.get('/:id', auth, async (req, res)=>{
    try{
        const todo = await Todo.findOne({
            id: req.params.id
        });
        res.status(200).send(todo);
    }
    catch(e){
        res.status(400).json({
            message: e.message
        })
    }
});

module.exports = router;