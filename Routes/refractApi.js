const express = require('express');
const Router = express.Router();
const model = require('../Model/refractApi');

const {
    PostrefractApi,
    GetreftactApi,
    GetrefractApiById
} = require('../Controllers/refractApi');




Router.post('/PostrefractApi',PostrefractApi);
Router.get('/GetreftactApi',GetreftactApi);
Router.get('/GetrefractApiById/:_id',GetrefractApiById);





module.exports = Router;