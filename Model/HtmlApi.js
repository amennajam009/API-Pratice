const mongoose = require('mongoose');

//Start Block Schema Creating
const HtmlModel = mongoose.Schema({
    FirstName: { type: String, 
                required: true },
   LastName: { type: String}, 
   html: {
    type: String, // Store HTML content
    required: true
},

  
},
 { timestamps: true })










module.exports = mongoose.model('HTMLcollection',HtmlModel);