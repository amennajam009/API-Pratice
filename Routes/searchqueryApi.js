const express = require('express')
const Router = express.Router()


const {PostDataFirstInDb} = require('../Controllers/searchqueryApi')

Router.post('/PostDataFirstInDb',PostDataFirstInDb)





module.exports = Router