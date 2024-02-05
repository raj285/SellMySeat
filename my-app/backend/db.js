const mongoose =require('mongoose');
const url1="localhost:27017/sellmyseat"

const t=async ()=>{
    await mongoose.connect(url1);
    console.log("ejkdudfznldz");
}
module.exports =t;
