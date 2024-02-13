// import mongoose.
import mongoose from "mongoose";

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
export default SignupSchema;