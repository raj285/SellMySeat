const express = require('express');
const app = express();
const connectToMongoDB = require("./db");
const path1=require("./routes/CreateUser")
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
    next();
})
app.use(express.json());
app.use('/api',path1);
// app.use('/api',require("./"))
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

