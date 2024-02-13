
// import nodemailer.
// const nodemailer = require("nodemailer");
import nodemailer from "nodemailer";


//bussiness Logic.
const sendmail= async(req,res)=>{

    console.log("bhsffjadfcjbcjabdcfdmn");

    //Only needed if you don't have a real mail account for testing.
    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'quincy.herman39@ethereal.email',
            pass: 'XFDVFGfV8PyaFPMRHs'
        }
    });

    

        const info = await transporter.sendMail({
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: "bar@example.com, baz@example.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
          });
        
          console.log("Message sent: %s", info.messageId);
         res.json(info);
  
}
// export controllers
// module.exports ={sendmail}
export default sendmail;