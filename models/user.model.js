/**  
*This will hold the schema of user
*It explains the different fields of user and how it will be stored in the database
*/

const mongoose =require("mongoose");

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        minLength:10
    },
    userType:{
        type:String,
        required:true,
        default:"CUSTOMER",
        enum:["CUSTOMER","ADMIN"]
    }
},{timestamps:true});

//Define collection name where it will be stored in the database
module.exports = mongoose.model("User",userSchema);
