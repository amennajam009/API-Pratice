

const {SearchByName} = require('../Model/SearchByNameApi')

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

module.exports = {
PostSearchByNameData
}