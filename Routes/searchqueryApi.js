const express = require('express')
const Router = express.Router()


const {PostDataFirstInDb,
       SearchByQuery,
       Search2DataQueryApi,
       FindDataByName} = require('../Controllers/searchqueryApi')

Router.post('/PostDataFirstInDb',PostDataFirstInDb)
Router.get('/SearchByQuery' , SearchByQuery)
Router.get('/FindDataByName',FindDataByName)
Router.get('/Search2DataQueryApi',Search2DataQueryApi)


module.exports = Router