const mongoose = require("mongoose")
const connect = () =>{
    console.log("Connected to the local database")
    return mongoose.connect("mongodb://localhost:27017/royalBrothers");
  }
  
  
  module.exports = connect;