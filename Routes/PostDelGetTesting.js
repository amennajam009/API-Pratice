const express = require('express');
const Router = express.Router();
const {models}=require("../Model/PostDelGetModel");

const {
    PostTheData
}=require("../Controllers/PostDelGetController");








Router.post("/PostTheData",PostTheData);



module.exports = Router;