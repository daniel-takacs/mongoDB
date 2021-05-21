const express = require('express')
const app = express()
app.listen(8000)

const mongoose = require('mongoose')

const CONNECTION_STRINGS = 'mongodb+srv://Dave:12345@cluster0.rglzw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const connectionCallback = ()=> console.log('CONNECTED')

mongoose.connect(CONNECTION_STRINGS, options, connectionCallback) 

//body parser
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

const Message = require('./model')
app.post('/', async (req, res)=> {
    const message = new Message({
        userName: req.body.username,
        Message: req.body.message
    })
    try {
        const respone = await message.save()
        res.json(response)
    }catch(e){
        res.json({error: e})
    }
})