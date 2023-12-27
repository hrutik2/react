const express=require("express")
const { Auth } = require("../middleware/auth")
const { AccountModle } = require("../modules/acount")
const { Authetication } = require("../middleware/Authentication")

const OtherRoutes=express.Router()

OtherRoutes.post("/creating",Auth,async(req,res)=>{
    const {userId}=req.body
    try {
        const Account=await AccountModle.findOne({userId})
        if (!Account) {
          const account=new AccountModle(req.body)
          const response= await account.save()
          res.status(200).json(response)
        }
        
    } catch (error) {
        res.status(400).send({"msg":error})
        
    }
})
OtherRoutes.get("/",Authetication,async(req,res)=>{
    const {userId}=req.body
    try {
        const Account=await AccountModle.findOne({userId})
        res.status(200).send(Account)
    } catch (error) {
        res.status(400).send({"msg":error})
    }
})
OtherRoutes.patch("/add",Authetication,async(req,res)=>{
    const {userId,Amount}=req.body
    console.log(req.body)
    try {
        const Account = await AccountModle.findOne({ userId });
        const currentDate = new Date(); 
        const formattedDate = currentDate.toISOString().split('T')[0];
        const hours = currentDate.getHours().toString().padStart(2, '0'); // Get hours
        const minutes = currentDate.getMinutes().toString().padStart(2, '0'); // Get minutes
        const seconds = currentDate.getSeconds().toString().padStart(2, '0'); // Get seconds
        const formattedTime = `${hours}:${minutes}:${seconds}`; 
        const obj={
            "Titel":"ADD",
            "Amount":Amount,
            "Date":formattedDate,
            "time":formattedTime
        }
        
        if(Account){
            Account.TranstionDetails.push(obj);
            const response =await AccountModle.updateOne({userId},{$inc: { balance: Amount },TranstionDetails:Account.TranstionDetails  })
            res.status(200).send({"msg":"amount added in your account"})            
        }
        else{
            res.status(400).send({"msg":"user Account not Found"})
        }
    
    } catch (error) {
        res.status(400).send({"msg":error})
    }
})
OtherRoutes.patch("/pay",Authetication,async(req,res)=>{
    const {userId,Amount}=req.body
    try {
        const Account=await AccountModle.findOne({userId})
        if(Account){
            const currentDate = new Date(); 
            const formattedDate = currentDate.toISOString().split('T')[0];
            const hours = currentDate.getHours().toString().padStart(2, '0'); // Get hours
            const minutes = currentDate.getMinutes().toString().padStart(2, '0'); // Get minutes
            const seconds = currentDate.getSeconds().toString().padStart(2, '0'); // Get seconds
            const formattedTime = `${hours}:${minutes}:${seconds}`; 
            const obj={
                "Titel":"payment",
                "from":Account.AccountNo,
                "to":"a",
                "Amount":Amount,
                "Date":formattedDate,
                "time":formattedTime
            }
            const amount=Account.balance-Amount 
            Account.TranstionDetails.push(obj);
            const response =await AccountModle.updateOne({userId}, { balance:amount,TranstionDetails:Account.TranstionDetails } )
            res.status(200).send({"msg":"amount didected from your account"}) 
            console.log(response.TranstionDetails)           
        }
        else{
            res.status(400).send({"msg":"user Account not Found"})
        }
    
    } catch (error) {
        res.status(400).send({"msg":error})
    }
})
module.exports={OtherRoutes}