const express = require('express');
const Router = express.Router();


// models
const {Models} = require('../Model/ProductGetTestModel');

const { 
    UserInfo,
    UserInfo2,
    UserInfo3
} = require('../Controllers/ProductGetTestController');




Router.get('/UserInfo',UserInfo);
Router.get('/UserInfo2',UserInfo2);
Router.get('/UserInfo3',UserInfo3);


module.exports = Router;
