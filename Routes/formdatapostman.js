const express = require('express');
const Router = express.Router();


const {MyformdatapostmanApi,
    testingdataapi} = require('../Controllers/formdatapostman')

Router.post("/MyformdatapostmanApi",MyformdatapostmanApi)
Router.post("/testingdataapi",testingdataapi)


module.exports = Router