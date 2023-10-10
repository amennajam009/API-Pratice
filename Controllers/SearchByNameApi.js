

const {SearchByName} = require('../Model/SearchByNameApi')

const PostSearchByNameData = async(req,res) =>{
    try {
        const {Name , country , city , address} = req.body;
        const MappingData = await SearchByName.save({
            Name , country , city , address
        })

    } catch (error) {
        
    }
}