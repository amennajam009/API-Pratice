//Dependencies
const mongoose = require('mongoose');


//Start Block Schema Creating
const devcamperModel = mongoose.Schema({
    FirstName: { type: String, 
                required: true },
   LastName: { type: String, 
               required: true},
    Phone:   { type: Number, 
               required: true},           
    softDeleteStatus: { type: Number, default: 0},  
  
},
 { timestamps: true })


//Exporting The Schema
module.exports = mongoose.model('devcampercollection',devcamperModel);