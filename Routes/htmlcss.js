const express = require('express');
const Router = express.Router();

const {htmlcssApi,
} = require('../Controllers/htmlcss')

Router.post('/htmlcssApi',htmlcssApi)



module.exports = Router;