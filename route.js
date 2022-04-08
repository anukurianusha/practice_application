const express = require('express');
const router=require("express").Router();
const validate=require('./validate');
const login=require("./controllers/loginController")
const retailerschema=require('./validators/createretailerValidatorSchema');
const customerschema=require('./validators/createcustomerschema');
const registerCustomer=require('./controllers/registerCustomerController')
const registerRetailer = require('./controllers/registerRetailerController')
const readCustomerDetails = require('./controllers/getCustomerDetailsController')
const applyLoanCustomer = require('./controllers/applyLoanController')
const approvedloanDetails= require('./controllers/getLoanDetailsController')
const validateToken=require("./validators/validateAuthentication")

router.post("/registerRetailer",validate.postretialervalidate(retailerschema.createretailerschema),registerRetailer);
router.post("/registerCustomer",validate.postcustomervalidate(customerschema.createcustomerschema),registerCustomer);
router.post("/applyLoan",validateToken,applyLoanCustomer);
router.post("/login",login)

router.get('/loans',approvedloanDetails)
router.get('/getCustomerDetails',validateToken,validate.getvalidate(customerschema.readschema),readCustomerDetails);   
module.exports = router;
