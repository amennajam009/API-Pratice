const express = require('express');
const Router = express.Router();


const {
    UserInfoToDel,
    ApiOfDelete
}=require ('../Controllers/ProductDelTestController');



// const {Models} = require('../Model/ProductGetTestModel');






Router.delete('/UserInfoToDel/:_id',UserInfoToDel);
Router.delete('/ApiOfDelete/:_id',ApiOfDelete)













module.exports = Router;