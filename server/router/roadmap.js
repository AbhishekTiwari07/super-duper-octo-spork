const router = require('express').Router();
const Roadmap = require('../model/roadmap');
const Step = require('../model/step');
const auth = require('../middleware/auth');


router.post('/addNew', auth, async (req,res)=>{
    try{
        const title = req.body.title;
        
        const rm = new Roadmap({
            user: req.user.id,
            title
        });

        await rm.save();

        res.status(200).send({
            rm
        })
    }
    catch(e){
        res.status(400).json({
            message: e.message
        })
    }
});

router.post('/addNewStep/:id', auth, async (req,res)=>{
    try{
        const id = req.params.id;
        
        const step = new Step({
            suite: id,
            ...req.body
        });
        await step.save();

        const rm = await Roadmap.findOne({id});

        rm.steps.push(step);
        await rm.save();

        res.status(200).send({
            step
        })
    }
    catch(e){
        res.status(400).json({
            message: e.message
        })
    }
});

module.exports = router