const express = require('express')
const app = express()
require('dotenv').config()
const PORT  = process.env.PORT

const userRouter = require('./app/Routes/User')
const bookRouter = require('./app/Routes/Books')
const browseBookRouter = require('./app/Routes/BrowseBooks')
const summaryRouter = require('./app/Routes/Summary')

app.use(express.json()) // parses the body
app.use(userRouter)
app.use(bookRouter)
app.use(browseBookRouter)
app.use(summaryRouter)

app.listen(PORT,()=> console.info(`Server has started on ${PORT}`))