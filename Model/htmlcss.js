const mongoose = require('mongoose');


const HtmlCssmodel = mongoose.Schema({
    firstname:{ type: String , required : true},
    lastname: {type: String , required: true},
    address: {type: String , required:true},
    country: {type: String , required: true },
    html: {type:String},
    css: {type:String}
})




 module.exports = {
    HtmlCssmodel: mongoose.model('HtmlCssCollection',HtmlCssmodel),
  };
