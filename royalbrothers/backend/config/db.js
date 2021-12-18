const mongoose = require("mongoose")
const connect = () =>{
    console.log("Connected to the local database")
    return mongoose.connect("mongodb+srv://kamlesh:12345@cluster0.fnubs.mongodb.net/test");
  }
  
  
  module.exports = connect;