const {AgainTask , mymodeldata } =require("../Model/againPratice");


// First we'll post the data
const PostTheDataFirst =async (req,res) =>{
    try {
        const {ProductName,ProductPrice,ProductQuantity,Description,MoreFlavour,Company,Address,Country}= req.body;
        const ToSendData = new AgainTask({
            ProductName,ProductPrice,ProductQuantity,Description,MoreFlavour,Company,Address,Country
        });
        const PostingTheData = await ToSendData.save();
        res.json({
            Message:"The Api Of Post is working successfully!!",
            Data:true,
            Request:PostingTheData
        })
    } catch (error) {
        res.json({
            Message:error.message,
            Data:false,
            Result:null
        })
    }
}
// find All data
const FindAllData =async (req,res) =>{
    try {
        
        const FindAllData = await AgainTask.find();
        res.json({
            Message:"The API of FindAllData is working successfully!!!",
            Data:true,
            Result:FindAllData
        })
    } catch (error) {
        res.json({
            Message:error.message,
            Data:false,
            Result:null
        })
    }
}

//find specific data
const FindTheSpecificData =async (req,res) =>{
try {
        const Id = req.params._id;
        const FindIt = await AgainTask.findOne(
            {_id:Id}
        );
        res.json({
            Message:"Api of Findone Is working",
            Data:true,
            Result:FindIt
        })   
} catch (error) {
    res.json({
        Message:error.message,
        Data:false,
        Result:null
    })
}
}

// delete All Data

const DeleteTheData =async (req,res) =>{

    try {
        const DeleteTheWholeData = await AgainTask.deleteMany();
        res.json({
            Message:"Delete The Data",
            Data:true,
            Result:DeleteTheWholeData
        })
    } catch (error) {
        res.json({
            Message:error.message,
            Data:false,
            Result:null
        })
    }
}

const delspeific =async (req,res) =>{
    try {
        const Id = req.params._id;
        const delTheDoc = await AgainTask.findOne(
            {_id:Id}
        );
        if(!!delTheDoc){
            const Delthewhole = await AgainTask.deleteOne(
                {_id:delTheDoc._id}
            );
            res.json({
                message:"Api of delete is working",
                Data:true,
                Result:Delthewhole
            })
        }
    } catch (error) {
        res.json({
            message:error.message,
            Data:false,
            Result:null
        })
    }

}

const mytestingapi =async (req,res) =>{
    try {
        const findmydata = await mymodeldata.find();
        res.json({
            message:"apiworks",
            data:true,
            Result: findmydata
        })
    } catch (error) {
        res.json({
            message:error.message,
            data:false,
            Result:null
        })
    }
}


module.exports={
    PostTheDataFirst,
    FindAllData,
    FindTheSpecificData,
    DeleteTheData,
    delspeific,
    mytestingapi
}