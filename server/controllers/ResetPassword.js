const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");
const crypto = require("crypto");


// resetPasswordToken 
exports.resetPasswordToken = async(req,res) =>{

    try{
    // get email from req body
    const email = req.body.email;

    // check user for this email, email validation
    const user= await User.findOne({email:email});
    if(!user){
        return res.status(401).json({
            success:false,
            message:"Your email is not registered with us",
        });
    };
    // genrate token
    const token = crypto.randomBytes(20).toString("hex");


    // update user by adding token and expiration time 
    const updatedDetails = await User.findOneAndUpdate(

                                        {email:email},

                                        {
                                            token:token,
                                            resetPasswordExpires:Date.now()+5*60*1000,
                                        },
                                        // It will pass udatd response if we will not do this it will give old details
                                        {new:true},           );

    // create url
    const url = `http://localhost:3000/update-password/${token}`
    // send mail containing the url 
     await mailSender(email,
                    "Password Reset Link",
                    `Password Rset Link: ${url}`,

     )
    // return response 
    return res.status(400).json({
        success:true,
        message:"Email send succssfully,please check email and change password",
    });

    }

    catch(error){
        console.log(error);
        return res.status(500).json({
                success:false,
                message:"Something went wrong while sending reset password mail ",
            });
    }

}






// resetPassword
exports.resetPassword = async (req,res) =>{
    try{
// data fetch
    const {password,confirmpassword,token}=req.body;
    // validation
    if(password !== confirmpassword) {
        return res.status(403).json({
            success:false,
            message:"Password not matching",
        });
    }
    // get user detials from db using token 
    const userDetails = await user.findOne({token:token});
    // if no entry - invalid token
    if(!userDetails){
        return res.status(402).json({
            success:false,
            message:"Token is invalid",
        });
    }
    // token time check 
    if( userDetails.resetPasswordExpires < Date.now()){
        return res.status.json({
            success:false,
            message:"Token is expired , please regenerate your token",
        });
    }
    // hash password
    const hashedPassword = await bcrypt.hash(password,10);
    // password update
    await User.findOneAndUpdate(
        {token:token},
        {password:hashedPassword},
        {new:true},
    );
    // return rrsponse  
    return res.status(200).json({
        success:true,
        message:"Password reset successfully",
    });
    }


    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Password reset failed,try again",
        })
    }
 
}

