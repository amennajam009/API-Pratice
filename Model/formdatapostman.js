const mongoose = require('mongoose');

//Start Block Schema Creating
const formdatapostman = mongoose.Schema({
    FirstName: { type: String, 
                required: true },
   LastName: { type: String, 
               required: true},
   City: { type: String,
                required: true },
   Country: { type: String},           
    phone  : { type: Number, default: 0},  
  
},
 { timestamps: true })



module.exports = {
    formdatapostman: mongoose.model('formdatapostman', formdatapostman)
  };