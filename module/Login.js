// import mongoose.
const mongoose = require("mongoose");

// route handler.
const LoginSchema = new mongoose.Schema({
    username:{
        type:module,
        require:true, 
       },
       password:{
        type:module,
        require:true, 
       }
       
})

//
module.exports = mongoose.model("logi",LoginSchema);