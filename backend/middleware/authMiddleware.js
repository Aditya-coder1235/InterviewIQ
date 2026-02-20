const jwt=require('jsonwebtoken')
const User=require('../models/User');

const isAuth=async(req,res,next)=>{
    let token=req.cookies.token

    if(!token){
        return res.status(400).json({message:"Token Invalid"})
    }

    try {

        let decoded=jwt.verify(token,process.env.JWT_SECRET);

        req.user=decoded

        next()
        
    } catch (error) {
        return res.status(400).json({ message: "Token Invalid" })
    }
}

module.exports=isAuth