const mongoose=require('mongoose')

async function connectDb(){
    await mongoose.connect(process.env.MONGO_URI)
}

module.exports=connectDb