const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required: [true,"name must be required"],
        trim:true
    },
    email:{
        type:String,
        required: [true, "email must be required"],
        unique:true,
        lowercase: true
    },
    password:{
        type:String,
        required: [true, "password must be required"],
        select: false 
    }
},{timestamps:true});

const User=mongoose.model('User',userSchema)
module.exports=User;