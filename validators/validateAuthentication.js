const mongoose=require("mongoose");
const customer = require('../models/customer');
const customerModel=mongoose.model('customer',customer)
const jwtService=require('../services/jwtService')
async function validate(req,res,next){
    const {token}=req.headers;
    const Email=await jwtService.decryptJWT(token)
   console.log(Email);
try{
await customerModel.find({Email:Email}).select({_id:0,age:0,__v:0}).exec();
next();
}catch(e){
    console.log(e,"invalid token");
    res.status(404).send("invalid token");
}
}
module.exports=validate;
