const { userModle } = require("../modules/usermodel");





function generateRandom12DigitNumber() {

    let randomNumber = Math.floor(Math.random() * 1000000000000);
    let random12DigitNumber = randomNumber.toString();
    while (random12DigitNumber.length < 12) {
      random12DigitNumber = '0' + random12DigitNumber;
    }
   return random12DigitNumber;
  }

const Sign=async(req,res,next)=>{
    const { name, Email, Password, PhoneNo} = req.body;
try {
    const user = await userModle.findOne({ Email });
    if(!user){
   const Account=  generateRandom12DigitNumber()
   req.body.AccountNo = (+Account)
    next()
    }
    else{
        next()
    }
        
} catch (error) {
console.log(error)
}
}
module.exports={Sign}