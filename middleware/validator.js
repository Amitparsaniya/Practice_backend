const {check,validationResult} = require('express-validator')

exports.userValidator=[
    check("name").trim().not().isEmpty().withMessage('Name is Missing!'),
    check("email").normalizeEmail().isEmail().withMessage("Email is invalid!"),
    check("password").trim().not().isEmpty().withMessage("Password ig!s Missing").isLength({min:8,max:20}).withMessage("Password must be 8 to 20 charactors long!")
]

exports.signinValidator=[
  check("email").normalizeEmail().isEmail().withMessage("Email is invalid!"),
  check("password").trim().not().isEmpty().withMessage("Password is Missing")
]

exports.ValidatePassword=[
   check("newpassword").trim().not().isEmpty().withMessage("Password ig!s Missing!").isLength({min:8,max:20}).withMessage("Password must be 8 to 20 charactors long!")
]

exports.validate =(req,res,next)=>{
  const error =validationResult(req).array()
  if(error.length){
    return res.send({error:error[0].msg})
  }
  next()
}