const express = require('express');
const Router = express.Router();

const {ProductData} = require ('../Controllers/ImageApi');

const imagemodel = require ('../Model/ImageApi');
const {ImageApiMiddleware} = require ('../Middleware/ImageApimiddleware');


Router.post('/ProductData',ImageApiMiddleware.array('images',20),ProductData);





module.exports = Router;