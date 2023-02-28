const { isValidObjectId } = require("mongoose")
const passwordresettoken =require("../models/passwordresettoken")

exports.isValidPasswordresettoken =async (req,res,next)=>{
    try{

        const {token,userId} =req.body
        
        if(!token.trim()|| !isValidObjectId(userId)){
            res.send({error:"Inbvalid request!"})
    }
    
    const resettoken = await passwordresettoken.findOne({owner:userId})
    
    if(!resettoken){
        res.send({error:"Unauthorized access,Invalid token!"})
    }
    
    const macthed = await resettoken.comparetoken(token)
    
    if(!macthed){
        res.send({error:"Unauthorized access,Invalid token!"})
    }
    
    req.resettoken = resettoken
    next()
 }catch(e){
    console.log(e);
 }
}