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

        const rm = await Roadmap.findOne({_id : id});

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

router.get('/:id', async (req,res)=>{
    try{
        const rm = await Roadmap.findOne({
            _id: req.params.id
        }).populate('steps')

        res.status(200).send(rm);
    }
    catch(e){
        res.status(400).json({
            message: e.message
        });
    }
})

router.put('/:id', async (req,res)=>{
    try{
        var rm = await Roadmap.findOneAndUpdate({
            _id: req.params.id
        },{
            ...req.body
        });

        res.status(200).send(rm);
    }
    catch(e){
        res.status(400).json({
            message: e.message
        });
    }
})

router.get('/step/:id', async (req,res)=>{
    try{
        const step = await Step.findOne({
            _id: req.params.id
        })

        res.status(200).send(step);
    }
    catch(e){
        res.status(400).json({
            message: e.message
        });
    }
})

router.put('/step/:id', async (req,res)=>{
    try{
        var step = await Step.findOne({
            _id: req.params.id
        });

        if(req.body.title)
            step.title = req.body.title;
        
        if(req.body.description)
            step.description = req.body.description;

        const s = await step.save()

        res.status(200).send(s);
    }
    catch(e){
        res.status(400).json({
            message: e.message
        });
    }
});

module.exports = router