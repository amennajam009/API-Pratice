const express = require('express');
const Router = express.Router();

const {MyHtmlApi2
}= require('../Controllers/HtmlApi');



Router.post('/HtmlApi' , MyHtmlApi2)

module.exports = Router;