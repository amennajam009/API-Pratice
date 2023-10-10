const express = require('express');
const Router = express.Router();

const {
    PostSearchByNameData,
    GetSearchByNameData
} = require('../Controllers/SearchByNameApi')



Router.post('/PostSearchByNameData',PostSearchByNameData)
Router.get('/GetSearchByNameData/:Name',GetSearchByNameData)



module.exports = Router;