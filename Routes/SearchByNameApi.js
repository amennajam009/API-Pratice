const express = require('express');
const Router = express.Router();

const {
    PostSearchByNameData
} = require('../Controllers/SearchByNameApi')



Router.post('/PostSearchByNameData',PostSearchByNameData)




module.exports = Router;