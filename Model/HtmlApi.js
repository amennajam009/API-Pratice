const mongoose = require('mongoose');

//Start Block Schema Creating
// const HtmlModel = mongoose.Schema({
//     FirstName: { type: String, 
//                 required: true },
//    LastName: { type: String}, 
//    html: {
//     type: String, // Store HTML content
//     required: true
// },  
// },

//  { timestamps: true })

const HTMLmodel2 = mongoose.Schema({
    firstname:{ type: String , required : true},
    lastname: {type: String , required: true},
    MultideminalArray :[{
        Array1:{
            id:{type:Number},
            name:{type:String},
            variable:{type:String}
        },
        Array2:{
            id:{type:Number},
            name:{type:String},
            variable:{type:String}
        },
        Array3: {
            id:{type:Number},
            name: {type:String},
            variable:{type:String},
        },
        Array4: {
            id: {type:Number},
            name: {type:String},
            variable: {type:String},
        } 
    }
    ],
    html: {type:String}
})




module.exports = mongoose.model('HTMLcollection',HTMLmodel2);