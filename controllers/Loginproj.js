//import the module.
const Login = require("../module/Login");
const bcrypt =require("bcrypt");
const JWT = require('jsonwebtoken');


//LOGIN
const loginController = async(req,res) =>{

    try{
        const {username,password} =req.body

        //validation
        if(!username || !password){
            return res.status(500).send({
                success:false,
                message:"Please provide Email or Password"
            })
        }

        //check user
        const user = await Login.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:"User Not Found"
            })
        }
        //check user password || compare password
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(500).send({
                success:false,
                message:"Invalid credential"
            })
        }

        //token generate
        const token = JWT.sign({id:user._id},process.env.JWT_SECRET,{
            expiresIn:"7d",
        });


        res.status(200).send({
            success:true,
            message:"Login Successfully",
            token,
            user
        })

    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in Login API",
            error
        })
    }

}

module.exports = {loginController}