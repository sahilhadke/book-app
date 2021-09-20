const Summary = require('../Models/summary')
require('../Database/mongoose')
const auth = require('../Middleware/auth')
const express = require('express')

const router = express.Router()

router.get('/summary/:id', auth, async (req, res) => {
    try{
        var summary = await Summary.findOne({
            bookId: req.params.id,
            userId: req.user._id
        })
        if(summary){
            res.send(summary)
        }else{
            res.send('no summaries found')
        }
    }catch(e){
        res.send(e)
    }
})

router.get('/my-summaries/', auth, async (req, res) => {
    try{
        var summary = await Summary.find({
            userId: req.user._id
        })
        console.log(summary)
        if(summary.length > 0){
            res.send(summary)
        }else{
            res.send('no summaries found')
        }
    }catch(e){
        res.send(e)
    }
})

router.post('/summary/add', auth, async (req, res) => {
    try{
        const summary = new Summary({
            userId: req.user._id,
            bookId: req.body.bookId,
            description: req.body.description
        })

        summary.save()
        res.send(summary)
    }catch(e){
        res.status(500).send(exports)
    }
})

// Update Summary
router.patch('/summary/edit/', auth, async (req, res) => {

    try{

        var summary = await Summary.findOne({
            bookId: req.body.bookId,
            userId: req.user._id
        })

        if(summary){

            summary.description = req.body.description

            // summary.forEach((update)=>{
            //     summary[update] = req.body[update]
            // })
    
            await summary.save()

            res.status(200).send(summary)

        }else{

            res.status(404).send('no summaries found')

        }
        
    }catch(e){

        console.log(e)
        res.status(400).send(e)

    }

})

module.exports = router