import mailSender from "../utils/mailSender";

const mongoose= require("mongoose");

const OTPSchema = new mongoose.Schema({
        email:{
            type:String,
            required:true,
        },
        otp:{
            type:String,
            required:true,
        },
        createdAt:{
            type:Date,
            default:Date.now(),
            expires:5*60,
        },

});

// A function to send emails
async function sendVerificationEmail(email,otp) {
    try{
        const mailResponse = await  mailSender(email, "Verification Email from StudyNotation",otp);
        console.log("Email sent successfully: ",mailResponse);
    }

    catch(error){
        console.log("Error occured while sending ",error);
        throw error;
    }
};

OTPSchema.pre("save",async function(next){
    if (this.isNew) {
    await sendVerificationEmail(this.email,this.otp);
    }
    next();
});

module.exports = mongoose.model("OTP",OTPSchema);