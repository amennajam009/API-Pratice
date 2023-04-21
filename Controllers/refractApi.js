
const refractApiTesting = require('../Model/refractApi');


const PostrefractApi =async (req,res) =>{
    try {
        const {ProductHeading,Productdescription,ProductPrice} = req.body;
        const MappingMydata = new refractApiTesting({
            ProductHeading,Productdescription,ProductPrice
        });
        const DocToSnd = await MappingMydata.save();
        res.json({
            message:"Api of refractApi is working successfully!!",
            Data:true,
            Result:DocToSnd
        })
    } catch (error) {
        res.json({
            message:error.message,
            Data:false,
            Result:null
        })
    }
}

const GetreftactApi =async (req,res)=>{
    try {
        const GetAllData = await refractApiTesting.find();
        res.json({
            message:"Api of Get works",
            Data:true,
            Result:GetAllData
        })
    } catch (error) {
        res.json({
            message:error.message,
            Data:false,
            Result:null
        })
    }
}

const GetrefractApiById =async (req,res)=>{
      try {
        const Id = req.params._id;
        const FindDocById = await refractApiTesting.findById(
            {_id:Id}
        );
        res.json({
            message:"API is working!!!",
            Data:true,
            Result:FindDocById
        })
      } catch (error) {
        res.json({
            message:error.message,
            Data:false,
            Result:null
        })
      }
}

const DeletAllrefractApi =async(req,res) =>{
   try {
    const DelDoc = await refractApiTesting.deleteMany();
    res.json({
        message:"Api is working!!",
        Data:true,
        Result:DelDoc
    })
   } catch (error) {
    res.json({
        message:error.message,
        Data:false,
        Result:null
    })
   }
}

const DeleteByIdrefractApi =async (req,res)=>{
    try {
        const Id = req.params._id;
        const DelTheDoc = await refractApiTesting.findByIdAndDelete(
            {_id:Id}
        );
        res.json({
        message:"Api is Working successfully!!",
        Data:true,
        Result:DelTheDoc
        })
        }
     catch (error) {
        res.json({
            message:error.message,
            Data:false,
            Result:null
        })
    }
}

module.exports = {
    PostrefractApi,
    GetreftactApi,
    GetrefractApiById,
    DeletAllrefractApi,
    DeleteByIdrefractApi
}