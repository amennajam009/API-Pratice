const express = require("express")
const Router = express.Router()



const {
    DataToSendVariables
}= require("../Controllers/SendVariables")


Router.get("/DataToSendVariables",DataToSendVariables)


module.exports = Router;