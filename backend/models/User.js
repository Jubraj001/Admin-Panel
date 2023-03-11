// define a user schema
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    roomNumber: String,
    roomType: String,
    startTime: String, //Convert into date
    endTime: String, //Convert into date
  });
  
// define a user model
const User = mongoose.model("User", userSchema);
module.exports=User;