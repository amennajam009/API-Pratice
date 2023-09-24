const {formdatapostman , newdataapi} = require('../Model/formdatapostman')


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

const testingdataapi =async (req,res) =>{
    try {
        const {FirstName,LastName,City,Country,phone} = req.body;
        const Mappingdata = new newdataapi({
            FirstName,LastName,City,Country,phone
        });
        const DataTosend = await Mappingdata.save();
        res.json({
            message:'api works',
            data:true,
            result:DataTosend
        })
    } catch (error) {
        res.json({
            message:error.message,
            data:false,
            result:null
        })
    }
}


module.exports={
    MyformdatapostmanApi,
    testingdataapi
}