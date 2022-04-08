const mongoose = require('mongoose');
const { boolean } = require('yup');
const Schema = mongoose.Schema;
const loan = new Schema({
   Email:{
    type: String,
    required: true,
   },
      
    loanAmount: {
        type: Number,
        required: true,
    },
    rateOfInterest: {
        type: Number,
        required: true,
    },
    maturityAmount: {
        type: Number,
        required: true
    },
    dailyRetrievalAmount:{
        type: Number,
        required: true,
    },
    Status:{
        type: Boolean,
        required: true,
    }
    
})
module.exports = loan;
