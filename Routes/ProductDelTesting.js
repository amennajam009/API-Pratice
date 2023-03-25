const express = require('express');
const Router = express.Router();


const {
    UserInfoToDel,
    ApiOfDelete,
    ApiDeleteId
}=require ('../Controllers/ProductDelTestController');



// const {Models} = require('../Model/ProductGetTestModel');






Router.delete('/UserInfoToDel/:_id',UserInfoToDel);
Router.delete('/ApiOfDelete/:_id',ApiOfDelete);
Router.delete('/ApiDeleteId/:_id',ApiDeleteId)













module.exports = Router;