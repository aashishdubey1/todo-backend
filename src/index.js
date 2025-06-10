const express = require("express");
const {PORT} = require('./config/server-config')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/ping',(req,res)=>{
    console.log("Pong")
})

app.get('/',(req,res)=>{
    console.log("arrived")
    res.send("running")
})


app.listen(PORT,()=>{
    console.log("Server is runnig on port",PORT)
})