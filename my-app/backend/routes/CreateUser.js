const express =require('express');
const router=express.Router();
const User=require('../models/User');
const { body, validationResult } = require('express-validator');
// const app=express();
router.post("/createuser", 
[body('email').isEmail()
.custom(async (value) => {
    const user = await User.findOne({ email: value });
    if (user) {
        throw new Error('Email already exists');
    }
    return true;
}),
body('name',"length of name should be greater than 3").isLength({min : 3}),
body('password', 'Password length must be greater than 8 and contain at least one numeric value, one alphabet, and one special character')
    .isLength({ min: 8 })
    .matches(/[0-9]/) // At least one numeric value
    .matches(/[a-zA-Z]/) // At least one alphabet
    .matches(/[!@#$%^&*(),.?":{}|<>]/),
body('rpassword').custom((value,{req})=>{
    if(value!==req.body.password){
        throw new Error('password does not match')
    }
    return true
})
],
async (req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    try {
            let data=new User({
            name:req.body.name,
            password:req.body.password,
            rpassword:req.body.rpassword,
            email  :req.body.email,
            location:req.body.location
        })
        let result=await(data.save());
        res.send(result);
    } catch (error) {
        console.log(error);
    }
}) 

router.post("/login",

[body('email').isEmail(),
body('password', 'Password length must be greater than 8 and contain at least one numeric value, one alphabet, and one special character')
    .isLength({ min: 8 })
    .matches(/[0-9]/) // At least one numeric value
    .matches(/[a-zA-Z]/) // At least one alphabet
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
],
async (req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    try {
        let t=req.body.email; 
        // const t1=req.query.password
        const data=await User.find({email:req.body.email});
        console.log(data);
        // data is an array here 
        if(!data[0]){
            return res.status(400).json({errors:"please sign up first,User not found"});
        } 
        if((data[0].password) !== (req.body.password)){
            return res.status(400).json({errors:"password is not correct"});
        }
        return res.json({success:true});
    } catch (error) {
        console.error(error);
            return res.status(500).json({ errors: "Internal Server Error" });
    }
})

module.exports=router;
