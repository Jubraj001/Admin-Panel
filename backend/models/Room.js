// define a user schema
const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    roomType: String,
    roomNumber: String, 
    price: String
  });
  
// define a user model
const Room = mongoose.model("Room", roomSchema);
module.exports=Room;