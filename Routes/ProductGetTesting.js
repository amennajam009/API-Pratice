const express = require('express');
const Router = express.Router();


// models
const {Models} = require('../Model/ProductGetTestModel');

const { 
    UserInfo,
} = require('../Controllers/ProductGetTestController');




Router.get('/UserInfo',UserInfo)


module.exports = Router;
