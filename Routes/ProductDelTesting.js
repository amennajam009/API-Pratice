const express = require('express');
const Router = express.Router();


const {
    UserInfoToDel,
    ApiOfDelete,
    ApiDeleteId,
    DelTheUser,
    AgainDelete,
    AgainForPratice
}=require ('../Controllers/ProductDelTestController');



// const {Models} = require('../Model/ProductGetTestModel');







Router.delete('/UserInfoToDel/:_id',UserInfoToDel);
Router.delete('/ApiOfDelete/:_id',ApiOfDelete);
Router.delete('/ApiDeleteId/:_id',ApiDeleteId);
Router.delete('/DelTheUser/:_id',DelTheUser);
Router.delete('/AgainDelete/:_id',AgainDelete);
Router.delete('/AgainForPratice/:_id',AgainForPratice)







module.exports = Router;