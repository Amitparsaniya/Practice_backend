const mongoose = require('mongoose')

const DB =process.env.DB


mongoose.connect(DB).then(()=>{
    console.log("Db is connected!");
}).catch((e)=>{
    console.log(e|| "db is not connected!");
})