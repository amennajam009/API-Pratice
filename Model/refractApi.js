
const mongoose = require('mongoose');

const refractApiTesting = new  mongoose.Schema({
    ProductHeading: { type: String, required: true },
    Productdescription: { type: String, required: true },
    ProductPrice: { type: Number, required: true },
},
 { timestamps: true })






 module.exports = mongoose.model('refractApiCollection', refractApiTesting); 