const express = require('express');
const Router = express.Router();


const {
    UserInfoToDel,
    ApiOfDelete
}=require ('../Controllers/ProductDelTestController');






Router.delete('/UserInfoToDel/:_id',UserInfoToDel);
Router.delete('/ApiOfDelete/:_id',ApiOfDelete)













module.exports = Router;