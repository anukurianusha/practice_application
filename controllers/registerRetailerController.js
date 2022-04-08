const mongoose = require("mongoose");
const retailer = require('../models/retailer');
const retailerModel=mongoose.model('retailer',retailer)
const sha256=require("js-sha256")
async function registerRetailer(req, res) {
    
    const {Email,phone_number,cibil_score,Business_name,Unique_business_Id,Adress,Bank_acct_details,Password}=req.body;
    const retailerData = new retailerModel({
       Email:Email,
       phone_number:phone_number,
       cibil_score: cibil_score,
       Business_name:Business_name,
       Unique_business_Id:Unique_business_Id,
       Adress:Adress,
       Bank_acct_details:Bank_acct_details,
       Password:sha256(Password)
        });
        
    try {
        await retailerData.save();
        res.status(201).send("data inserted success fully")
    } catch (e) {
        console.log("error inserting the data",e);
    }
   
   
}
module.exports = registerRetailer;
