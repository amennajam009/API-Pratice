const express = require('express');
const Router =  express.Router();


const {addingtwonumber,subtractTwonumber,DividingTwonumber} = require('../Controllers/ProductTestController');


Router.post('/addingtwonumber',addingtwonumber);
Router.post('/subtractTwonumber' ,subtractTwonumber);
Router.post('/DividingTwonumber' ,DividingTwonumber);


module.exports = Router;
