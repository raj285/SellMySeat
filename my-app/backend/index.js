const express=require('express');
const t=require("./db");

const app=express();
let p=t();
console.log(p);
app.get('/',()=>{

})
app.listen(5000)