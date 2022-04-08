const res = require("express/lib/response")

 function postretialervalidate(createretailerschema){
   return async(req,res,next)=>{
    try{
        await createretailerschema.validate(req.body)
        next();
        console.log("hai")
    }
    catch(e){
        res.status(400).send(e);
    }

    }
}
function postcustomervalidate(createcustomerschema){
    return async(req,res,next)=>{
     try{
         await createcustomerschema.validate(req.body)
         next();
         console.log("hai")
     }
     catch(e){
         res.status(400).send(e);
     }
 
     }
 }
 function getvalidate(readschema){
    return async(req,res,next)=>{
     try{
       
        const result=await readschema.validate(req.query);
        console.log(result)
         next();
     }
     
     catch(e){
       console.log(e)
        res.status(400).send(e);
     }
    
     }
 }
    module.exports.postretialervalidate=postretialervalidate;
    module.exports.postcustomervalidate=postcustomervalidate;
    module.exports.getvalidate=getvalidate;
    