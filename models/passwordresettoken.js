const mongoose =require('mongoose')
const bcrypt =require('bcrypt')

const passwordresettoken = mongoose.Schema({
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    token:{
            type:String,
            required:true
    },
    createAt:{
      type:Date,
      expires:3600,
      default:Date.now()
    }
})
  

passwordresettoken.pre("save",async function(next){
    const user =this
    if(user.isModified("token")){
        user.token =await bcrypt.hash(user.token,10)
    }
    next()
})

passwordresettoken.methods.comparetoken = async function(token){
    const user =this
    const result= bcrypt.compare(token,user.token)
    return result
}



module.exports = mongoose.model("Passwordresettoken",passwordresettoken)
