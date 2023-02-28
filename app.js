const express =require('express')
const morgan =require('morgan')

require('dotenv').config()
const userroute= require('./routes/user')


require("./DB/db")



const app =express()
app.use(morgan("dev"))
app.use(express.json())
app.use(userroute)

app.listen(5000,()=>{
    console.log("your server start on port 5000");
})

