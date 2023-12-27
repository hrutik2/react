const jwt = require('jsonwebtoken');
require('dotenv').config()
const Auth=async(req,res,next)=>{
   const token= req.headers.authorization?.split(" ")[1]
try {
    const decoded = jwt.verify(token,process.env.secretkey)
    if(decoded){
    req.body.name=decoded.userName,
    req.body.userId=decoded.userId,
    req.body.AccountNo=decoded.userAccount,
    req.body.balance=0
    req.body.TranstionDetails=[]
    next()
    }
    else{
         res.status(401).send({"error": 'You are not logged in'})
    }
        
} catch (error) {
console.log(error)
}
}
module.exports={Auth}