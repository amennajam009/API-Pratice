const express = require('express');
const Router = express.Router();

const {MyHtmlApi2,
    AnotherHtmlApi
      
}= require('../Controllers/HtmlApi');



Router.post('/HtmlApi' , MyHtmlApi2);
Router.post('/htmlApi2' , AnotherHtmlApi )

module.exports = Router;