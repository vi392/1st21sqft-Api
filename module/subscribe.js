// import mongoose.
import mongoose from "mongoose"
//schema.
const subscribeSchema = new mongoose.Schema({

    email:{
        type:module,
        required:[true,"user email is required"],
        unique:true,
        
    },
   
})
//export
export default subscribeSchema;