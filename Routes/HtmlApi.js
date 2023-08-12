const express = require('express');
const Router = express.Router();

const {MyHtmlApi
}= require('../Controllers/HtmlApi');



Router.post('/HtmlApi' , MyHtmlApi)

module.exports = Router;