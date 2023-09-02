const express = require('express');
const Router = express.Router();

const {htmlcssApi,
    interpolationhtmlcssApi
} = require('../Controllers/htmlcss')

Router.post('/htmlcssApi',htmlcssApi)
Router.post('/interpolationhtmlcssApi',interpolationhtmlcssApi)



module.exports = Router;