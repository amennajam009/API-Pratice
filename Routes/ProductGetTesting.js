const express = require('express');
const Router = express.Router();


// models
const {Models} = require('../Model/ProductGetTestModel');

const { 
    UserInfo,
    UserInfo2,
    UserInfo3,
    FindUserbyId,
    FindUserbyId2,
    GetAllProductData,
    WannaFindalldataAgin,
    FindDataById
} = require('../Controllers/ProductGetTestController');




Router.get('/UserInfo',UserInfo);
Router.get('/UserInfo2',UserInfo2);
Router.get('/UserInfo3',UserInfo3);
Router.get('/FindUserbyId/:_id',FindUserbyId);
Router.get('/FindUserbyId2/:_id',FindUserbyId2);
Router.get('/GetAllProductData',GetAllProductData);
Router.get('/WannaFindalldataAgin',WannaFindalldataAgin);
Router.get('/FindDataById/:_id',FindDataById)



module.exports = Router;
