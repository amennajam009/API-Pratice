const express = require('express');
const Router = express.Router();
const model = require('../Model/refractApi');

const {
    PostrefractApi,
    GetreftactApi
} = require('../Controllers/refractApi');




Router.post('/PostrefractApi',PostrefractApi);
Router.get('/GetreftactApi',GetreftactApi);





module.exports = Router;