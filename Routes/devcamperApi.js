const express = require('express');
const Router = express.Router();

const model = require('../Model/devcampermodel');
const {MyApiToPost,
      GetAllApiOfDev,
      DocFindById
}= require('../Controllers/devcamperApi');






Router.post('/MyApiToPost',MyApiToPost);
Router.get('/GetAllApiOfDev',GetAllApiOfDev);
Router.get('/DocFindById/:_id',DocFindById);

module.exports = Router;