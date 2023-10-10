const express = require('express');
const Router = express.Router();

const {
    PostSearchByNameData,
    GetSearchByNameData,
    GetDataApi
} = require('../Controllers/SearchByNameApi')



Router.post('/PostSearchByNameData',PostSearchByNameData)
Router.get('/GetSearchByNameData/:Name',GetSearchByNameData)
Router.get('/GetDataApi',GetDataApi)


module.exports = Router;