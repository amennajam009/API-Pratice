const express = require('express');
const Router = express.Router();
const model = require('../Model/ProductPostTestModel');

const {
    PostProductData,
    FormApi,
    CustomerInfo,
    UserInfoToDel
} = require('../Controllers/ProductPostTestController');



Router.post('/PostProductData',PostProductData);
Router.post('/FormApi',FormApi);
Router.post('/CustomerInfo',CustomerInfo);
Router.delete('/UserInfoToDel/:_id',UserInfoToDel)



module.exports = Router;