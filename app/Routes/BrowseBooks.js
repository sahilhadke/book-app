const express = require('express')
const axios = require('axios');
const {parse, stringify} = require('flatted');

// AlL BOOKS LINK = https://www.googleapis.com/books/v1/volumes?q=harry+potter
// SINGLE BOOK LINK = https://www.googleapis.com/books/v1/volumes/f280CwAAQBAJ
// f280CwAAQBAJ = items[0].id

const router = express.Router()

const fetchBooks = async (query) => {

    var keywords = await query.split(' ').join('+')
    let API = `https://www.googleapis.com/books/v1/volumes?q=${keywords}`

    try{

        var response = await axios.get(API)
        var dataToSend = response.data.items
        return (dataToSend)

    }catch(e){

        console.log(e)
        return {sahil: 0}

    }    
    
}

const fetchSingleBook = async (query) => {

    let API = `https://www.googleapis.com/books/v1/volumes/${query}`
    console.log('API: ',API)

    try{
        var response = await axios.get(API)
        return(response.data)

    }catch(e){

        console.log(e)
        return {sahil: 0}

    }   
    
}


router.get('/books', async(req, res) => {
    const response = await fetchBooks(req.query.q)
    res.send(response)
})

router.get('/book/single/:id', async(req, res) => {
    const response = await fetchSingleBook(req.params.id)
    console.log(response)
    res.send(response)
    // res.send(typeof((req)))
})

module.exports = router