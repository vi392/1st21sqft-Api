//import the module.
const conta = require("../module/Contact");

// define route handler.
exports.Contactproj = async(req,res) => {
    try{
     // extract title and descripation from request body
     const{name,email,phoneno,Service,Yourmessage} = req.body;
     //create a new Todo obj and insert in DB
     const response = await conta.create({name,email,phoneno,Service,Yourmessage});
// send a json responce with a success flag
res.status(200).json(
    {
        success:true,
        data:response,
        message:'Entry Created Successfully'

    }
);
    }
    catch(err){
       console.log(err);
       res.status(500)
       .json(
         {
           success:false,
            data:"internal server error",
            message:err.message, 
         }
       )
    }
}

