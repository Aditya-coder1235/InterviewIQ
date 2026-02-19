const User=require('../models/User');
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')

exports.signupUser=async(req,res)=>{
    try {
        let {name,email,password}=req.body;

        if(!name || !email || !password){
            return res.status(400).json({message:"All feilds are required"});
        }

        let user=await User.findOne({email});
        if(user){
            return res.status(400).json({message:"User already registered"});
        }

        let hashPassword=await bcrypt.hash(password,13)

        await User.create({name,email,password:hashPassword});

        res.status(201).json({message:"User register successfully"})
        
    } catch (error) {
        res.status(500).json({message:"Server error"});
    }
}

exports.loginUser = async (req, res) => {
    try {

        let { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "All feilds are required" });
        }

        let user = await User.findOne({ email }).select('+password');
        if (!user) {
            return res.status(404).json({ message: "User Not Found" });
        }

        let isMatched=await bcrypt.compare(password,user.password)
        if (!isMatched) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token=jwt.sign(
            {id:user._id,email:user.email},
            process.env.JWT_SECRET,
            {expiresIn:'2d'}
        )

        res.cookie('token',token,{
            httpOnly:true,
            secure:false,
            sameSite:'lax'
        });

        res.status(200).json({message:"User login success",user});


    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}

exports.logoutUser = async (req, res) => {
    try {

        res.clearCookie('token', {
            httpOnly: true,
            secure: false,
            sameSite: 'lax'
        });

        res.status(200).json({ message: "User logout success" });

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}