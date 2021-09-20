const { ObjectID } = require('bson')
const mongoose = require('mongoose')

const summarySchema = new mongoose.Schema({
    description:{
        type: String,
        required: true,
        trim: true
    },
    userId:{
        type: ObjectID,
        required: true,
    },
    bookId:{
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
})


const Summary = mongoose.model('Summary', summarySchema)

module.exports = Summary