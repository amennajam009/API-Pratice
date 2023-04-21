const express = require('express');
const Router = express.Router();
const model = require('../Model/refractApi');

const {
    PostrefractApi
} = require('../Controllers/refractApi');




Router.post('/PostrefractApi',PostrefractApi);





module.exports = Router;