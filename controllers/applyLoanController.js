const mongoose = require("mongoose");

const loan = require('../models/loan');
const loanModel=mongoose.model('loan',loan);
//const setloan=require("./loanService")


async function applyCustomerLoan(req, res) {
    const Email=req.query.Email;
     const {loanAmount,Status}=req.body;
    const rateOfInterest=0.12;
    let setmaturityAmount;
    setmaturityAmount=(loanAmount*rateOfInterest)/12 + loanAmount;
    let setinterestValue;
    setinterestValue=(loanAmount*rateOfInterest)/12;
    let setdailyRetrievalAmount;
    setdailyRetrievalAmount=setmaturityAmount/30;
   
    const loanData = new loanModel({
        Email:Email,
        loanAmount: loanAmount,
        rateOfInterest:setinterestValue,
        maturityAmount:setmaturityAmount,
        dailyRetrievalAmount:setdailyRetrievalAmount,
        Status:Status

        });
    try {
        await loanData.save();
        res.status(201).send("data inserted success fully")
    } catch (e) {
        console.log("error inserting the data",e);
    }
}
module.exports=applyCustomerLoan;
