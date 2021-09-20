const Book = require('../Models/books')
require('../Database/mongoose')
const auth = require('../Middleware/auth')
const express = require('express')

const router = express.Router()

router.post('/book/add/', auth, async (req, res) => {
    const book = new Book({
        _id: req.body._id,
        title: req.body.title,
        category: req.body.category,
        userId: req.user._id
    })
    try{      
        await book.save()
        res.status(200).send(book)
    }catch(e){
        console.log(e)
        res.status(400).send(e)
    }
})

router.get('/my-books/', auth, async (req, res) => {
    try{      
        const myBooks = await Book.find({
            userId: req.user._id
        })
        res.status(200).send(myBooks)
    }catch(e){
        console.log(e)
        res.status(400).send(e)
    }
})

module.exports = router