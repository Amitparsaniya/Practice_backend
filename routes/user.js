const express =require('express')
const { create, VerifyEmail, resendEmailVerificationToken, forgetpassword, sendpasswordresettokenStatus, resetpassword, signIn } = require('../controllers/user')
const { isValidPasswordresettoken } = require('../middleware/user')
const { userValidator, validate, ValidatePassword, signinValidator } = require('../middleware/validator')

const router =express.Router()

router.post("/create",userValidator,validate,create)
router.post("/sign-in",signinValidator,validate,signIn)

router.post("/verify-email",VerifyEmail)
router.post("/resend-Emailverification-token",resendEmailVerificationToken)
router.post("/forget-password",forgetpassword)
router.post("/verify-password-reset-token",isValidPasswordresettoken,sendpasswordresettokenStatus)
router.post("/reset-password",ValidatePassword,validate,isValidPasswordresettoken,resetpassword)


module.exports = router