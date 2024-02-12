// import mongoose.
const mongoose = require("mongoose");

// route handler.
const ContactSchema = new mongoose.Schema({
    name:{
     type:String,
     require:true, 
    },
    email:{
     type:String,
     require:true,
    //  maxLength:50,
 },
   phoneno:{
       type:String,
       require:true,
   },
   Service:{
     type:String,
     require:true,
   },
   Yourmessage:{
    type:String,
    require:true,
  },
 })
 //
 module.exports = mongoose.model("conta",ContactSchema);