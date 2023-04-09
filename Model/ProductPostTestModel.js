//Dependencies
const mongoose = require('mongoose');

// Date
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1; 
const year = today.getFullYear(); //year
const time = today.getTime(); //time 

//Start Block Schema Creating
const ProductPostTesting = new  mongoose.Schema({
    ProductName: { type: String, required: true },
    ProductQuantity: { type: Number, required: true },
    ProductPrice: { type: Number, required: true },
    color:{ type:String, required:true },
    LogoMaterial:{ type:String, required:true },
    EnterDescription:{ type:String, required:true },
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
 


 const NewFormTesting = new mongoose.Schema({
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Email: { type: String, required: true },
    phone:{ type:Number, required:true },
    Address:{ type:String, required:true },
    YourMessage:{ type:String, required:true },

    CreatedDate: {
        type: String,
        default: `${year}-${month}-${day}-${time}`,
    }
},
 { timestamps: true })


const CustomerSales = new mongoose.Schema({
    FirstName: {type:String, required:true },
    Sales: {type:String, required:true },
    ProductType: {type:String, required:true },
    Company: {type:String, required:true },
    Contact: {type:String, required:true },
    country: {type:String, required:true },
    month: {type:String, required:true },
    CreatedDate: {
        type: String,
        default: `${year}-${month}-${day}-${time}`,
    }
},
 { timestamps: true })

module.exports = {
    ProductPostTesting: mongoose.model('ProductPostTesting', ProductPostTesting),
    NewFormTesting: mongoose.model('NewFormTesting', NewFormTesting),
    CustomerSales: mongoose.model('CustomerSales', CustomerSales)
  };

