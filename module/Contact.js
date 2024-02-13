// import mongoose.
import mongoose from "mongoose";

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
       type:module,
       require:true,
   },
   Service:{
     type:module,
     require:true,
   },
   Yourmessage:{
    type:module,
    require:true,
  },
 })
 //
 export default ContactSchema;