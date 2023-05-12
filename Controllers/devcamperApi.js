const devcamperModel = require('../Model/devcampermodel');

// Edhr mai apni Api ka format thora change kr rhe hun 


const MyApiToPost =async (req,res) =>{
   try {
    const DocToSave = await devcamperModel.create(req.body);
    res.json({
        message:'Api Works Successfully!!',
        Data:true,
        Result:DocToSave
    })
   } catch (error) {
     res.json({
        message:error.message,
        Data:false,
        Result:null
     })
   }
}

const GetAllApiOfDev =async(req,res)=>{
    try {
        const DocToFind = await devcamperModel.find();
        res.json({
          message:'Api Works!!',
          Data:true,
          Result:DocToFind
        })
    } catch (error) {
        res.json({
            message:error.message,
            Data:false,
            Result:null
        })
    }
 
}





module.exports={
    MyApiToPost,
    GetAllApiOfDev
}