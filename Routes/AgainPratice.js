const express = require('express');
const Router = express.Router();
const {model}=require("../Model/againPratice")

const {
    PostTheDataFirst,
    FindAllData,
    FindTheSpecificData,
    DeleteTheData
}=require("../Controllers/AgainPratice");

Router.post("/PostTheDataFirst",PostTheDataFirst);
Router.get("/FindAllData",FindAllData);
Router.get("/FindTheSpecificData/:_id",FindTheSpecificData);
Router.delete("/DeleteTheData",DeleteTheData)





module.exports = Router;