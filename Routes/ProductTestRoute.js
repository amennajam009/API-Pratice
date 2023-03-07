const express = require('express');
const Router = express.Router();


const { addingtwonumber, subtractTwonumber, DividingTwonumber, multiplyTwonumber, AddandSub, DividingAndMulti, Printnumbers1To10, PrintOddnumber, PrintEvennumber,IsnumOddEven,FizzBuzz } = require('../Controllers/ProductTestController');


Router.post('/addingtwonumber', addingtwonumber);
Router.post('/subtractTwonumber', subtractTwonumber);
Router.post('/DividingTwonumber', DividingTwonumber);
Router.post('/multiplyTwonumber', multiplyTwonumber);
Router.post('/AddandSub', AddandSub);
Router.post('/DividingAndMulti', DividingAndMulti);
Router.post('/Printnumbers1To10', Printnumbers1To10);
Router.post('/PrintOddnumber', PrintOddnumber);
Router.post('/PrintEvennumber',PrintEvennumber);
Router.post('/IsnumOddEven',IsnumOddEven);
Router.post('/FizzBuzz',FizzBuzz);





module.exports = Router;
