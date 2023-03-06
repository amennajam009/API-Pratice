const express = require('express');
const Router =  express.Router();


const {addingtwonumber,subtractTwonumber,DividingTwonumber,multiplyTwonumber,AddandSub,DividingAndMulti,Printnumbers1To10} = require('../Controllers/ProductTestController');


Router.post('/addingtwonumber',addingtwonumber);
Router.post('/subtractTwonumber' ,subtractTwonumber);
Router.post('/DividingTwonumber' ,DividingTwonumber);
Router.post('/multiplyTwonumber' , multiplyTwonumber);
Router.post('/AddandSub',AddandSub);
Router.post('/DividingAndMulti',DividingAndMulti);
Router.post('/Printnumbers1To10',Printnumbers1To10)



module.exports = Router;
