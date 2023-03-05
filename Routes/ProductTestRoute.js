const express = require('express');
const Router =  express.Router();


const {addingtwonumber,subtractTwonumber} = require('../Controllers/ProductTestController');


Router.post('/addingtwonumber',addingtwonumber);
Router.post('/subtractTwonumber' ,subtractTwonumber);


module.exports = Router;
