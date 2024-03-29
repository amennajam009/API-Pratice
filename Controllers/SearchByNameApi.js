

const SearchByName = require('../Model/SearchByNameApi')

const PostSearchByNameData = async(req,res) =>{
    try {
        const {Name , country , city , phone, address} = req.body;
        const MappingData = new SearchByName({
            Name , country , city , phone, address
        });
        const DataToSave = await MappingData.save();
        res.json({
            message:'Api works successfully',
            Data:true,
            Result:DataToSave
        })
    } catch (error) {
        res.json({
            message : error.message,
            Data:false,
            Result:null
        })
    }
}

const GetSearchByNameData =async (req,res) =>{
    try {
       const FindByName = req.params.Name;
       const DataToFindByName = await SearchByName.findOne(
        {Name:FindByName} //condition
       )
       res.json({
          message : 'Api Works successfully',
          Data: true,
          Result: DataToFindByName
       })
    } catch (error) {
        res.json({
            message:error.message,
            Data:false,
            Result:null
        })
    }
}
const GetDataApi =async (req,res) =>{
try {
    const mydata = {
        collection1 : {
            id:1,
            name : "amen",
            age : 21
        },
        collection2 : {
            id:2,
            name: "amen2",
            age:21
        },
        collection3 : {
            id:3,
            name: "amen3",
            age:21
        }
      } 
      res.json({
        data:mydata
      })
} catch (error) {
    res.json({
        data:false,
    })
}
}
module.exports = {
PostSearchByNameData,
GetSearchByNameData,
GetDataApi
}