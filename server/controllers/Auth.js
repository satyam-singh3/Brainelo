const User = require("../models/User");
const OTP = require("../models/OTP");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const otpGenerator = require("otp-generator")
const mailSender = require("../utils/mailSender")
const { passwordUpdated } = require("../mail/templates/passwordUpdate")
const Profile = require("../models/Profile")



// SendOTP
exports.SendOTP = async (req,res) => {

        try{
    // fetch email from request body
    const {email}=req.body; 

    //  Check if user already exist
    const checkUserPresent = await User.findOne({email});

    // If user already exist then return response
    if(checkUserPresent){
        return res.status(401).json({
            success:false,
            message:'User already registered',
        })
    }


    // OTP Generator
    var otp = otpGenerator.generate(6,{
        upperCaseAlphabets:false,
        lowerCaseAlphabets:false,
        specialChars:false,
    });
    console.log("OTP generated: ",otp);


    // Check unique otp or not
    let result = await OTP.findOne({otp:otp});
    while(result){
        otp = otpGenerator.generate(6,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false,
        });
        result = await OTP.findOne({otp:otp});
    }

    // Create an entry for OTP in database
    const otpPayload = {email,otp};
    const otpBody = await OTP.create(otpPayload);
    console.log(otpBody);

    // Return response Successfully
    res.status(200).json({
        success:true,
        message:'OTP Sent Successfully',
        otp,
    })

 }

    catch(error){
            console.log(error);
            return res.status(500).json({
                success:false,
                message:error.message,

            })
        }

}







// SignUp
exports.signUp = async (req,res) =>{
try{

    // data fetch from request body 
    const {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        accountType,
        contactNumber,
        otp
    }=req.body;

    // validate krlo 
    if (!firstName || !lastName || !email || !password || !confirmPassword || !accountType || !contactNumber || !otp){
        return res.status(403).json({
            success:false,
            message:"All fields are required",
        })
    }


    // 2 password match kr lo 
    if (password != confirmPassword){
        return res.status(400).json({
            success:false,
            message:'Password and ConfirmPassword value does not match,please try again',
        });
    }


    // check user already exists or not
    const existingUser = await User.findOne({email});
    if (existingUser){
        return res.status(400).json({
            success:false,
            message:'User is already registered',
        });
    }    
    
    
    // find most recent OTP stored for the user
    const recentOtp = await OTP.find({email}).sort({createdAt:-1}).limit(1);
    console.log(recentOtp);


    // validate OTP
    if(recentOtp.length ==0){
        // OTP not found
        return res.status(400).json({
            success:false,
            message:'OTP not found'
        })
    }
    else if(otp !== recentOtp.otp){
        // OTP not matching
        return res.status(400).json({
            success:false,
            message:'Invalid OTP',
        })
    }
    
    // Hash password
    const hashPassword = await bcrypt.hash(password,10);

    
    // entry create in DB

     const profileDetails = await Profile.create({
        gender:null,
        dateOfBirth:null,
        about:null,
        contactNumber:null,
     })


    const user = await User.create({
        firstName,
        lastName,
        email,
        password:hashPassword,
        accountType,
        contactNumber,
        additionalDetails:profileDetails._id,
        image:"",
    })

    // Return Rsponse
    return res.status(200).json({
        success:true,
        message:'User is registered successfully',
    });
}
catch(error){
    console.log(error);
    return res.status(500).json({
        success:false,
        message:"User cannot be registered ,please try again",
    });
}

}













// Login
exports.login = async(req,res) =>{
    try{
        // get data from request body
         const {email,password}=req.body;
        // validation data
        if( !password || !email){
            return res.status(403).json({
                success:false,
                message:'All fields are required,please try again',
            });
        }
        // user exist or not
        const user = await User.findOne({email}).populate("additionalDetails");
        if(!user){
                return res.status(401).json({
                    success:false,
                    message:'User is not registered , please signup first',
                });
        } 
        // generate JWT , after password matching
        if(await bcrypt.compare(password,user.password)){
            const payload = {
                email:user.email,
                id:user._id,
                accountType:user.accountType,
            }
            const token = jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn:"2h",
            });
            user.token = token;
            password=undefined;
            
            // create cookie and send response
            const options = {
                expires:new Date(Date.now() + 3*24*60*60*1000),
                httpOnly:true,
            }
            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                user,
                message:'Logged in successfully',
            })

        }

        else{
            return res.status(401).json({
                    success:false,
                    message:'Password is Incorrect',
                });
            
        }
        
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'Login Failure ,please try again',
        });
    }
};





// Change Password
exports.changePassword = async (req, res) => {
    try {
      // get data from req body
      const userDetails = await User.findById(req.user.id)
  
     // get oldPassword,newPassword, confirmNewPassword
      const { oldPassword, newPassword } = req.body
  
      // validation
      const isPasswordMatch = await bcrypt.compare(
        oldPassword,
        userDetails.password
      )
      if (!isPasswordMatch) {
        return res
          .status(401)
          .json({ success: false, message: "The password is incorrect" })
      }
  
      // Update password
      const encryptedPassword = await bcrypt.hash(newPassword, 10)
      const updatedUserDetails = await User.findByIdAndUpdate(
        req.user.id,
        { password: encryptedPassword },
        { new: true }
      )
  
      // send mail - Password updated
      try {
        const emailResponse = await mailSender(
          updatedUserDetails.email,
          "Password for your account has been updated",
          passwordUpdated(
            updatedUserDetails.email,
            `Password updated successfully for ${updatedUserDetails.firstName} ${updatedUserDetails.lastName}`
          )
        )
        console.log("Email sent successfully:", emailResponse.response)
      } 
      
      catch (error) {
        console.error("Error occurred while sending email:", error)
        return res.status(500).json({
          success: false,
          message: "Error occurred while sending email",
          error: error.message,
        })
      }
  
       // return response 
      return res
        .status(200)
        .json({ success: true, message: "Password updated successfully" })
    } 
    
    catch (error) {
      console.error("Error occurred while updating password:", error)
      return res.status(500).json({
        success: false,
        message: "Error occurred while updating password",
        error: error.message,
      })
    }


  }
