const PostDelGetModel=require("../Model/PostDelGetModel");


// First We post The Data 

const PostTheData =async (req,res) =>{
   try {
         const {FirstName,LastName,Email,Contact,City,Country,Address,Company,Phone}=req.body;
         const MappingOfData = new  PostDelGetModel({
            FirstName,LastName,Email,Contact,City,Country,Address,Company,Phone
         })
        const DocToSave = await MappingOfData.save();
        res.json({
            Message:'Api Of PostTheData is Working',
            Data:true,
            Result:DocToSave
        })
   } catch (error) {
        res.json({
            Message:error.message,
            Data:false,
            Result:null
        })
   }   

}

//All the Data At once
const GetTheData =async (req,res) =>{
    try {
       const DocToSave = await PostDelGetModel.find();
       res.json({
        Message:"API is working successfully!!",
        Data:true,
        Result:DocToSave
       })
    } catch (error) {
        res.json({
            Message:error.message,
            Data:false,
            Result:null
        })
    }

}

// Now we'll find the Specific One 

const GetTheSpecificData =async (req,res) =>{
    try {
        const Id = req.params._id;
        const FindTheId = await  PostDelGetModel.findOne(
            {_id:Id}
        );
        res.json({
            Message:"Here The Specific Id ",
            Data:true,
            Result:FindTheId
        })
        } catch (error) {
        res.json({
            Message:error.message,
            Data:false,
            Result:null
        })
    }

}

module.exports = {
    PostTheData,
    GetTheData,
    GetTheSpecificData
    
}