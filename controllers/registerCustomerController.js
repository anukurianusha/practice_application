const mongoose = require("mongoose");
const customer = require('../models/customer');
const customerModel=mongoose.model('customer',customer)

const sha256=require("js-sha256")
async function registerCustomer(req, res) {
    
    const {Email,phone_number,Govt_unique_id,Adress,Bank_acct_details,Password}=req.body;
    const customerData = new customerModel({
       Email:Email,
       phone_number:phone_number,
       Govt_unique_id:Govt_unique_id,
       Adress:Adress,
       Bank_acct_details:Bank_acct_details,
       Password:sha256(Password)
        });
    try {
        await customerData.save();
        res.status(201).send("data inserted success fully")
    } catch (e) {
        console.log("error inserting the data",e);
    }
   
   
}
module.exports = registerCustomer;
