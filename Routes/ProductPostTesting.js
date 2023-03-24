const express = require('express');
const Router = express.Router();
const model = require('../Model/ProductPostTestModel');

const {
    PostProductData
} = require('../Controllers/ProductPostTestController');



Router.post('/PostProductData',PostProductData);



module.exports = Router;