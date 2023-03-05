const express = require('express');
const Router =  express.Router();


const {addingtwonumber} = require('../Controllers/ProductTestController');


Router.post('/addingtwonumber',addingtwonumber);


module.exports = Router;
