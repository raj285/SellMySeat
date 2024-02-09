const mongoose=require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/sellmyseat";
const mongoDB = async () => {
    try {
      await mongoose.connect(mongoURI);
      console.log("Connected!");
    } catch (error) {
      console.log("err: ", error);
    }
  };
  mongoDB();
  module.exports = mongoDB;
   