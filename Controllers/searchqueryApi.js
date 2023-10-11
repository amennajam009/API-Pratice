const SearchQueryApi = require('../Model/searchqueryApi');

const PostDataFirstInDb = async (req,res) =>{
    try {
        const {name,country,city,address,phone} = req.body;
        const MappingData = new SearchQueryApi({
            name , country , city , address , phone
        })
        const DataToSave = await MappingData.save();
        res.json({
            message: "Api Works",
            data:DataToSave,
            Result:true
        })
    } catch (error) {
        res.json({
            message: error.message,
            data:null,
            Result:false
        })
    }
}




module.exports = {
    PostDataFirstInDb
}