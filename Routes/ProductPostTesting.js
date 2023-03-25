const express = require('express');
const Router = express.Router();
const model = require('../Model/ProductPostTestModel');

const {
    PostProductData,
    FormApi,
    CustomerInfo
} = require('../Controllers/ProductPostTestController');



Router.post('/PostProductData',PostProductData);
Router.post('/FormApi',FormApi);
Router.post('/CustomerInfo',CustomerInfo)



module.exports = Router;