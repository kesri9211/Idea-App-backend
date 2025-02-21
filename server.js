//create and start server
const express = require('express');
const serverConfig =require("./configs/server.config")
const mongoose = require('mongoose');
const dbConfig = require("./configs/db.config");
const userModel =require("./models/user.model");

const app = express();

/**
 * Logic to connect to MongoDB and create an ADMIN user
 *  */ 
mongoose.connect(dbConfig.DB_URL);
const db=mongoose.connection;

db.on("error",()=>{
    console.log("Error connecting to database");
});
db.once("open",()=>{
    console.log("connected to database");
    init();
});
async function init(){
    /*
      Initialize the mongoDB with an ADMIN user
      check if the admin user already exists
     */
    let admin = await userModel.findOne({userId:"admin"});
    if(admin){
        console.log("Admin user already exists");
        return;
    }
    admin= await userModel.create({
        name:"Kesri Shukla",
        userId:"admin",
        password:"adminKesri",
        email:"coderbro26@gmail.com",
        userType:"ADMIN"
    });
    console.log("Admin user created", admin);
}




app.listen(serverConfig.PORT,()=>{
    console.log(`server is running on port ${serverConfig.PORT}`);
})