const express = require('express');
const Router = express.Router();
const {model}=require("../Model/againPratice")

const {
    PostTheDataFirst,
    FindAllData,
    FindTheSpecificData,
    DeleteTheData,
    delspeific,
    mytestingapi
}=require("../Controllers/AgainPratice");

Router.post("/PostTheDataFirst",PostTheDataFirst);
Router.get("/FindAllData",FindAllData);
Router.get("/FindTheSpecificData/:_id",FindTheSpecificData);
Router.delete("/DeleteTheData",DeleteTheData);
Router.delete("/delspeific/:_id",delspeific);
Router.get("/mytestingapi",mytestingapi)






module.exports = Router;