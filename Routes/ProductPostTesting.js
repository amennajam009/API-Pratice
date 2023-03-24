const express = require('express');
const Router = express.Router();
const model = require('../Model/ProductPostTestModel');

const {
    PostProductData,
    FormApi
} = require('../Controllers/ProductPostTestController');



Router.post('/PostProductData',PostProductData);
Router.post('/FormApi',FormApi)



module.exports = Router;