const express = require('express');
const Router =  express.Router();


const {addingtwonumber,subtractTwonumber,DividingTwonumber,multiplyTwonumber} = require('../Controllers/ProductTestController');


Router.post('/addingtwonumber',addingtwonumber);
Router.post('/subtractTwonumber' ,subtractTwonumber);
Router.post('/DividingTwonumber' ,DividingTwonumber);
Router.post('/multiplyTwonumber' , multiplyTwonumber);



module.exports = Router;
