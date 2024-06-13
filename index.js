// 1 Loads .env file contents into process.env by default

require('dotenv').config()


//2 import express

const express = require('express')

//3 import cores
const cors = require('cors')

//7 import DB
const db =require('./DB/connection')

//8 import Router

const router = require('./Routes/router')
const applicationMidiileware = require('./Middilewares/applicationMiddileware')



// 4  create a application using express

const pfserver = express()

//5 use

pfserver.use(cors())

pfserver.use(express.json()) //Return middileware that only parses

pfserver.use(applicationMidiileware)

//9 use

pfserver.use(router)

//used to export images from back-end
pfserver.use('/uploads', express.static('./uploads'))

//6 port creation
const PORT = 4000 || process.env.PORT

pfserver.listen(PORT,()=>{

    console.log("pfserver listening on port" +PORT);
})

pfserver.get('/',(req,res)=>{
    res.send("Welcome to mProject Fair")
})