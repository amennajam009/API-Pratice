const express = require('express');
const Router = express.Router();
const {models}=require("../Model/PostDelGetModel");

const {
    PostTheData,
    GetTheData,
    GetTheSpecificData,
    DeleteTheSpecificId,
    ProjectionCondtion,
    CondtionProjectionHide
}=require("../Controllers/PostDelGetController");








Router.post("/PostTheData",PostTheData);
Router.get("/GetTheData",GetTheData);
Router.get("/GetTheSpecificData/:_id",GetTheSpecificData);
Router.delete("/DeleteTheSpecificId/:_id",DeleteTheSpecificId);
Router.get("/ProjectionCondtion/:_id",ProjectionCondtion);
Router.get("/CondtionProjectionHide/:_id",CondtionProjectionHide)



module.exports = Router;