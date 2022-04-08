const mongoose = require("mongoose");
const loan = require('../models/loan');
const loanModel=mongoose.model('loan',loan);

async function approvedloanDetails(req,res){
 const Status=req.query.Status;
 try{
     const result=await loanModel.find({Status:Status}).select({_id:0,__v:0}).exec();
     console.log(result);
     res.status(200).send(result);
 }catch(e)
 {
     res.status(500).send("internal error")
 }
}
module.exports=approvedloanDetails;