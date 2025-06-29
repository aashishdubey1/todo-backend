const express = require("express");
const {PORT} = require('./config/server-config')
const apiRouter = require('./routes');
const errorHandler = require("./utils/error-handler");
const connetToDb = require("./config/db-config");

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api',apiRouter)




app.get('/',(req,res)=>{
    console.log("arrived")
    res.send("running")
})

app.use(errorHandler)

app.listen(PORT,async ()=>{
    console.log("Server is runnig on port",PORT)
    await connetToDb()
    console.log("Connected to db")
})