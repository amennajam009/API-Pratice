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

//For Testing Api on PostMan

// ==========> http://localhost:6060/SearchQueryApi/SearchByQuery?search=TestingName

//For Pratice 
const FindDataByName = async (req,res) =>{
    try {
      const FindObjectByName = req.query.search;
      const DataToFind = await SearchQueryApi.findOne(
        {country:FindObjectByName} //condition
      )      
      res.json({
        data:DataToFind
      })  
    } catch (error) {
        res.json({
            data:null
        })
    }
}
module.exports = {
    PostDataFirstInDb,
    SearchByQuery,
    FindDataByName,
    FindDataByName
}