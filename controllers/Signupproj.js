//import the module.
const Signup = require("../module/Signup");
const bcrypt =require("bcrypt");
const JWT = require('jsonwebtoken');


//register 

const signupController = async (req,res) =>{


    try{
        const {username,email,password} = req.body

        //validation
        if(!username || !email || !password){
            return res.status(500).send({
                success:false,
                message:"please provide All Fields"
            })
        }

        //check
        const exisiting = await Signup.findOne({email});
        if(exisiting){
            return res.status(500).send({
                success:false,
                message:"Email allready Registered please Login"
            })
        }
      
        //hashing paswword

        var salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(password,salt);


        //create new  User
        const user = await Signup.create({username,email,password:hashedPassword});

        res.status(201).send({
            success:true,
            message:"Successfully Registered",
            user,
        })

    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in register API",
            error
        })
    }

};

module.exports = {signupController}