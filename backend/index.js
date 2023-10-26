const connectToMongo = require('./db')
const express = require('express')
var cors = require('cors')
connectToMongo()
const app =express()
app.use(express.json())
app.use(cors())

//available Routes

app.use('/api/auth' , require('./Routes/auth'))
app.use('/api/notes' , require('./Routes/notes'))

app.get("/",(req,res)=>{
    res.send('hello world')
})


app.listen(5000 , (req,res)=>{
    console.log( "server is ready")
})


