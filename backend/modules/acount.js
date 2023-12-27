const mongoose=require("mongoose")

const AccountSchema=mongoose.Schema({
    name:String,
    AccountNo:Number,
    userId:String,
    balance:Number,
    TranstionDetails:Array,

})

const AccountModle=mongoose.model("account",AccountSchema)

module.exports={AccountModle}