//Dependencies
const mongoose = require('mongoose');

// Date
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1; 
const year = today.getFullYear(); //year
const time = today.getTime(); //time 

//Start Block Schema Creating
const ProductGetTesting = mongoose.Schema({
    FirstName: { type: String, required: true },
   LastName: { type: String, required: true},
    Email: { type: String, required: true },
    // color:{ type:String, required:true },
    // LogoMaterial:{ type:String, required:true },
    // selectSize:[],
    // EnterDescription:{ type:String, required:true },
    // status: { type: Number, default: 1 },
    // softDeleteStatus: { type: Number, default: 0},  
    CreatedDate: {
        type: String,
        default: `${year}-${month}-${day}-${time}`,
    }
},
 { timestamps: true })


//Exporting The Schema
module.exports = mongoose.model('ProductGetTesting', ProductGetTesting);