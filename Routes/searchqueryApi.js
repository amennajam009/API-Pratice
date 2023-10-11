const express = require('express')
const Router = express.Router()


const {PostDataFirstInDb,
       SearchByQuery,
       FindDataByName} = require('../Controllers/searchqueryApi')

Router.post('/PostDataFirstInDb',PostDataFirstInDb)
Router.get('/SearchByQuery' , SearchByQuery)
Router.get('/FindDataByName',FindDataByName)



module.exports = Router