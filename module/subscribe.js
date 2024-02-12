// import mongoose.
const mongoose = require('mongoose');
//schema.
const subscribeSchema = new mongoose.Schema({

    email:{
        type:String,
        required:[true,"user email is required"],
        unique:true,
        
    },
   
})
//export
module.exports=mongoose.model('subscribe',subscribeSchema)