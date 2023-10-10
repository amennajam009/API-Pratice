const mongoose = require('mongoose');

const SearchByName = new  mongoose.Schema({
    Name: { type: String, required: true },
    country : { type: String, required: true },
    city: { type: String, required: true },
    phone: {type: String , required : true},
    address: {type: String , required:true}
},
 { timestamps: true })


module.exports = mongoose.model('SearchByNameApi', SearchByName); 