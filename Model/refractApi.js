
const mongoose = require('mongoose');

const refractApiTesting = new  mongoose.Schema({
    ProductName: { type: String, required: true },
    ProductQuantity: { type: Number, required: true },
    ProductPrice: { type: Number, required: true },
},
 { timestamps: true })






 module.exports = mongoose.model('refractApiCollection', refractApiTesting); 