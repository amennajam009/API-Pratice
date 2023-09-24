const express = require('express');
const Router = express.Router();


const {MyformdatapostmanApi} = require('../Controllers/formdatapostman')

Router.post("/MyformdatapostmanApi",MyformdatapostmanApi)



module.exports = Router