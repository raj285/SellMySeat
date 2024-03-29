const mongoose =require('mongoose');
const schema=mongoose.Schema;
const Userschema= new schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true        
    },
    rpassword:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
module.exports =mongoose.model('userdata',Userschema);