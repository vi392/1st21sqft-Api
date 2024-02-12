// import mongoose.
const mongoose = require("mongoose");

// route handler.
const SignupSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true, 
       },
       email:{
        type:String,
        require:true, 
       },
       password:{
        type:String,
        require:true, 
       }
       
})

//
module.exports = mongoose.model("signu",SignupSchema);