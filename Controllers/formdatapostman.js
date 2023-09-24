const formdatapostman = require('../Model/formdatapostman')


const MyformdatapostmanApi = async(req,res) =>{
    try {
        const {FirstName,LastName,City,Country,phone} = req.body;
        const Mappingdata = new formdatapostman({
            FirstName , LastName , City , Country ,phone
        });
        const DataTosave = await Mappingdata.save()
        res.json({
            message:'api works successfully!!',
            Data: true,
            Result:DataTosave
        })
    } catch (error) {
        res.json({
            message : error.message,
            Data:false,
            Result:null
        })
    }
}



module.exports={
    MyformdatapostmanApi
}