const jwt=require("jsonwebtoken");
async function generateJWT(Email){
   const token= jwt.sign(Email,"Secret");
   return token;
}
async function decryptJWT(token){
   const Email=jwt.verify(token,"Secret")
  // console.log(EmailId);
   return Email
   
}
module.exports.generateJWT=generateJWT;
module.exports.decryptJWT=decryptJWT;