const mongoose = require("mongoose");
const customer = require('../models/customer');
const customerModel=mongoose.model('customer',customer)

async function readCustomerDetails(req,res){
 const Email=req.query.Email;
 try{
     const result=await customerModel.find({Email:Email}).select({_id:0,__v:0}).exec();
     console.log(result);
     res.status(200).send(result);
 }catch(e)
 {
     res.status(500).send("internal error")
 }
}
module.exports=readCustomerDetails;