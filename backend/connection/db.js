const mongoose=require("mongoose")
require("dotenv").config()
const Connection=mongoose.connect(process.env.mangoDB)

module.exports={Connection}