const express =require('express');
const router=express.Router();
const User=require('../models/User')

const app=express();
app.post("/createuser", async (req,res)=>{
    try {
            let data=new User({
            name:"Dipak Goswami",
            password:"*Nvrdsm",
            email  :"goswaminishant9670@gmail.com",
            location:"aafat"
        })
        let result=await(data.save());
        res.send(result);
    } catch (error) {
        console.log(error);
    }
})
module.exports=app;
