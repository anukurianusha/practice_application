const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const retailer = new Schema({
    Email: {
        type: String,
        required: true,
    },
    phone_number: {
        type: Number,
        required: true,
    },
    cibil_score: {
        type: Number,
        required: true
    },
    Business_name:{
        type: String,
        required: true,
    },
    Unique_business_Id:{
        type: String,
        required: true,
    },
    Adress:{
        type: String,
        required: true,
    },
    Bank_acct_details:{
        type: Number,
        required: true,
    },
    Password:{
        type: String,
        required: true,
    }
})
module.exports = retailer;
// 1.Email--- String
// 2.phone_number--- Integer
// 4.cibil score —  Int
// 5. Business_name ---String
// 6. Unique_business_Id ---String 
// 7.Adress----String
// 9. Bank_acct_details----   Int  
// 10. Password  ---string
