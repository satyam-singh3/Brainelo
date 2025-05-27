const mongoose = require("mongoose");
const { resetPassword } = require("../controllers/ResetPassword");

const userSchema = new mongoose.Schema({

    // The trim: true option in a Mongoose schema means that leading and trailing whitespace will be automatically removed from a string field before saving it to the database.
    firstName: {
        type:String,
        required:true,
        trim:true,
    },
    lastName : {
        type:String,
        required:true,
        trim:true,
    },
    email : {
        type:String,
        required:true,
        trim:true,
    },
    password: {
        type:String,
        required:true,
    },
    accountType : {
        type:String,
        // enum restricts the field to accept only specific values. The "role" field can only be "Admin", "Student", or "Instructor".If a user tries to enter a different value (e.g., "Guest"), Mongoose will throw an error.
        enum:["Admin","Student","Instructor"],
        required:true,
    },
    additionalDetails: {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Profile",
    },
    courses: [
        {
                type:mongoose.Schema.Types.ObjectId,
                // If we do not use ref in the schema ->  Mongoose will only store course IDs, but it won’t know which collection they belong to.
                ref:"Course",
        }
    ],
    image:{
        // Type is string because their will be the url of the image 
        type:String,
        required:true,
    },
    token:{
        type:String,
    },
    resetPasswordExpires:{
        type:Date,
    },
    courseProgress: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"CourseProgress",

        }
    ],  

},{ timestamps: true }
);
module.exports = mongoose.model("User",userSchema);
