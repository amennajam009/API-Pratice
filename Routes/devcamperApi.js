const express = require('express');
const Router = express.Router();

const model = require('../Model/devcampermodel');
const {MyApiToPost}= require('../Controllers/devcamperApi');






Router.post('/MyApiToPost',MyApiToPost);

module.exports = Router;