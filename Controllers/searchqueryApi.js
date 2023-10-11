const SearchByNameApi = require('../Model/SearchByNameApi');
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


const SearchByQuery = async (req,res) =>{
    try {
        const SearchByName = req.query.search;
        const SearchDataByName = await SearchQueryApi.findOne(
            {name:SearchByName} //condition
        )
        res.json({
            message:"Api working Successfully",
            data:SearchDataByName,
            result:true
        })
    } catch (error) {
       res.json({
        message:error.message,
        data:null,
        result:false
       }) 
    }
}


module.exports = {
    PostDataFirstInDb,
    SearchByQuery
}