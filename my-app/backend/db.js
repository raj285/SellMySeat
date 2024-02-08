const mongoose=require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/sellmyseat";
const mongoDB = async () => {
    try {
      await mongoose.connect(mongoURI);
      console.log("Connected!");
      // let fetched_data = mongoose.connection.db.collection("smsdata");
      // let data = await fetched_data.find({}).toArray();
      // res.send(data)
      // console.log(data);
    } catch (error) {
      console.log("err: ", error);
    }
  };
  
  module.exports = mongoDB;
   