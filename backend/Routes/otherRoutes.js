const express=require("express")

const OtherRoutes=express.Router()

OtherRoutes.post("/creating",async(req,res)=>{
    try {
        
        
    } catch (error) {
        res.status(400).send({"msg":error})
        
    }
})