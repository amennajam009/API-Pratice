//Dependencies
const mongoose = require('mongoose');

// Date
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1; 
const year = today.getFullYear(); //year
const time = today.getTime(); //time 

//Start Block Schema Creating
const AgainTask = mongoose.Schema({
    ProductName: { type: String, 
                required: true },
   ProductPrice: { type: Number, 
               required: true},
   ProductQuantity:   { type: Number, 
               required: true},           
    Description: { type: String,
         required: true,
   
        },
        MoreFlavour: { type: String,
              required: true },
    Company: { type: String,
              required: true },
    Address: { type: String, 
               required: true },
   Country: { type: String,
             required: true },

 
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



 const mymodeldata = mongoose.Schema({
    ProductName: { 
        type: String, 
        enum: ["dkgdfg", "dfgd", "ddfg"] // Replace with your desired options
    }

 })

 //Exporting The Schema
// module.exports = mongoose.model('AgainTask', AgainTask);

module.exports = {
    AgainTask: mongoose.model('AgainTask', AgainTask),
    mymodeldata: mongoose.model('mymodeldata', mymodeldata),
  };