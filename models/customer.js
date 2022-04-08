const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const customer = new Schema({
    Email: {
        type: String,
        required: true,
    },
    phone_number: {
        type: Number,
        required: true,
    },
   
    Govt_unique_id:{
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
module.exports = customer;
// 1.Email ---String
// 2.Phone_number-----Int
// 3. Govt_unique_id--- String   
// 4.Adress  ----String
// 6. Bank_acct_details----   Int 
// 7. Password ---String
