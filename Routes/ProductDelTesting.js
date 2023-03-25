const express = require('express');
const Router = express.Router();


const {
    UserInfoToDel
}=require ('../Controllers/ProductDelTestController');






Router.delete('/UserInfoToDel/:_id',UserInfoToDel)













module.exports = Router;