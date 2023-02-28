const crypto =require('crypto')
const nodemailer =require("nodemailer")

exports.generateOtp = (OTP_length =6)=>{
    let otp=""
    for(let i=1;i<=OTP_length;i++){
        const randomval= Math.round(Math.random()*9)
        otp += randomval
      }
    
      return otp
      
}

exports.generateMailtranspoter =()=>  nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: process.env.MAIL_TRAP_PORT,
    auth: {
      user: process.env.MAIL_TRAP_USER,
      pass: process.env.MAIL_TRAP_PASS,
    }
  });

exports.generateRandomBytes =()=>{
    return new Promise((reslove,reject)=>{
      crypto.randomBytes(30,(error,buff)=>{
        if(error) reject(error)
        const bufferString = buff.toString("hex")
        console.log(bufferString);
        reslove(bufferString)
      })
    })
}