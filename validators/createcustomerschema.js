const yup=require('yup');
let createcustomerschema=yup.object().shape({
    Email:yup.string().required(),
    phone_number:yup.number().integer(),
    Govt_unique_id:yup.string().required(),
    Adress:yup.string().required(),
    Bank_acct_details:yup.number().integer(),
    Password:yup.string().required(),

    
    
})
let readschema=yup.object().shape({
    Email:yup.string().required()
   
  
})
module.exports.createcustomerschema=createcustomerschema;
module.exports.readschema=readschema;
