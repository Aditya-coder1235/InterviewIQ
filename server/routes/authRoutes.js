const express=require('express')
const { signupUser, loginUser, logoutUser } = require('../controller/authController')
const router=express.Router()

router.post('/signup',signupUser)
router.post('/login',loginUser)
router.post('/logout',logoutUser)

module.exports=router