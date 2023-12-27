require("dotenv").config()
const express=require("express")
const { Connection } = require("./connection/db")
const { UserRoutes } = require("./Routes/userRoutes")
const app=express()
app.use(express.json())
app.use("/user",UserRoutes)
app.listen(process.env.Port,async()=>{
    try {
        await Connection
        console.log(`server is running on port ${process.env.Port}`)
    } catch (error) {
        console.log(error)
    }
})