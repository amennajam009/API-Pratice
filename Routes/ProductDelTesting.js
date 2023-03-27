const express = require('express');
const Router = express.Router();


const {
    UserInfoToDel,
    ApiOfDelete,
    ApiDeleteId,
    DelTheUser
}=require ('../Controllers/ProductDelTestController');



// const {Models} = require('../Model/ProductGetTestModel');







Router.delete('/UserInfoToDel/:_id',UserInfoToDel);
Router.delete('/ApiOfDelete/:_id',ApiOfDelete);
Router.delete('/ApiDeleteId/:_id',ApiDeleteId);
Router.delete('/DelTheUser/:_id',DelTheUser)







module.exports = Router;