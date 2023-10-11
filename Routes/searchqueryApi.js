const express = require('express')
const Router = express.Router()


const {PostDataFirstInDb,
    SearchByQuery} = require('../Controllers/searchqueryApi')

Router.post('/PostDataFirstInDb',PostDataFirstInDb)
Router.get('/SearchByQuery' , SearchByQuery)




module.exports = Router