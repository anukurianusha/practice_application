//const { urlencoded } = require('express');
const express = require('express');
const mongoose=require('mongoose')
const router = require('./route');

const app = express();
app.use(express.json())
app.use(express.json({urlencoded:true}))
app.use(router);
mongoose.connect('mongodb://localhost/practice', function (err) {
    if (err) {
        console.log("db error")
    }
    
    app.listen(9000, () => console.log('server running'))
})
