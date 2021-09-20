const { ObjectID } = require('bson')
const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    _id:{
        type: String,
        required: true,
        trim: true
    },
    title:{
        type: String,
        required: true,
        trim: true
    },
    userId:{
        type: ObjectID,
        required: true,
    },
    category:{
        type: String
    }
}, {
    _id:false,
    timestamps: true
})


const Book = mongoose.model('Book', bookSchema)

module.exports = Book