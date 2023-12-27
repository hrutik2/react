require("dotenv").config()
const express=require("express")
const { Connection } = require("./connection/db")
const app=express()

app.listen(process.env.Port,async()=>{
    try {
        await Connection
        console.log(`server is running on port ${process.env.Port}`)
    } catch (error) {
        console.log(error)
    }
})