const yup=require('yup');
let createretailerschema=yup.object().shape({
    Email:yup.string().required(),
    phone_number:yup.number().integer(),
    cibil_score:yup.number().integer(),
    Business_name:yup.string().required(),
    Unique_business_Id:yup.string().required(),
    Adress:yup.string().required(),
    Bank_acct_details:yup.number().integer(),
    Password:yup.string().required(),

   


})

module.exports.createretailerschema=createretailerschema;
