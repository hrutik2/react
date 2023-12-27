const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:String,
    Email:String , 
    Password:String , 
    PhoneNo:Number,
    AccountNo:Number
  

})

const userModle=mongoose.model("user",userSchema)

module.exports={userModle}