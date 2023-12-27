const express=require("express")
require('dotenv').config()
const { userModle } = require("../modules/usermodel")
const bcrypt = require('bcrypt');
const { Sign } = require("../middleware/sign");
const jwt = require('jsonwebtoken');
const UserRoutes=express.Router()
UserRoutes.post("/signup",Sign, async (req, res) => {
    const { name, Email, Password, PhoneNo,AccountNo } = req.body;

    try {
        if (!name || !Email || !Password || !PhoneNo) {
            return res.status(400).json({ "msg": "Please fill out all fields" });
        } else {
            const user = await userModle.findOne({ Email });

            if (user) {
                return res.status(400).json({ "msg": "User already exists" });
            } else {
                
                const hashedPassword = await bcrypt.hash(Password, 5);
               
                const newUser = new userModle({
                    name,
                    Email,
                    Password: hashedPassword,
                    PhoneNo,
                    AccountNo
                });

                // Save the new user to the database
                const response = await newUser.save();
                res.status(200).json({ "msg": "New user registered", "response": response });
            }
        }
    } catch (error) {
        res.status(500).json({ "msg": error.message });
    }
})
UserRoutes.post("/login",Sign, async (req, res) => {
    const { Email, Password} = req.body;

    try {
        const user = await userModle.findOne({ Email });
        if(user){
            const hashedPassword = await bcrypt.compare(Password,user.Password)
            if(hashedPassword){
              const token= jwt.sign({"userId":user._id,"userName":user.name,"userAccount":user.AccountNo},process.env.secretkey)
              res.status(200).send({"msg":"loging successful","token":token})
            }
            else{
                res.status(400).json({"msg":"Invalid email or password"});
            }
        }
        else{
            res.status(400).json({"msg":"User not found"});
        }
            
        
    } catch (error) {
        res.status(500).json({ "msg": error.message });
    }
})
module.exports={UserRoutes}
