const mongoose=require("mongoose");
const customer = require('../models/customer');
const customerModel=mongoose.model('customer',customer)
const retailer = require('../models/retailer');
const retailerModel=mongoose.model('retailer',retailer)
const sha256=require("js-sha256")
const jwtService=require("../services/jwtService")
async function validateLogin(req, res) {
   
    const {Email,Password}=req.body;
    try {
      
        await (customerModel.find({Email:Email,Password:sha256(Password)}).select({password:0,emailId:0,__v:0}).exec())||(retailerModel.find({Email:Email,Password:sha256(Password)}).select({password:0,emailId:0,__v:0}).exec());
       
const token=await jwtService.generateJWT(Email);
    res.setHeader('token',token);
    
    res.status(201).send("login successfully")
    
} catch (e) {
        console.log("invalid credentials");
        console.log(e)
    }
   
   
}
module.exports =  validateLogin;
//token-----eyJhbGciOiJIUzI1NiJ9.YW51QGdtYWlsLmNvbQ.mBDvM_2YVyO5iM3owTSbgecI_FjcH8Pq8c1wK5LIq8w