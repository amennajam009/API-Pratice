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

// now we'll Delete The Specific Id

const DeleteTheSpecificId = async (req,res) =>{
          try {
            const Id = req.params._id;
            const FindTheId = await PostDelGetModel.findOne(
                {_id:Id}
            );
            if(!!FindTheId){
                const DeleteId = await PostDelGetModel.deleteOne(
                    {_id:FindTheId._id}
                ); 
                res.json({
                    Message:"The User is Deleted Successfulyy!!",
                    Data:true,
                    Result:DeleteId
                })  
            }
          } catch (error) {
            res.json({
                Message:error.messsage,
                Data:false,
                Result:null
            })
          }
}

// in This Api i'll show specific Data With the use of projection / condition

const ProjectionCondtion =async (req,res) =>{
             try {
                const Id = req.params._id;
                const FindTheId = await PostDelGetModel.findOne(
                    {_id:Id},
                    {FirstName:1,LastName:1,City:1}
                );
                res.json({
                    Message:"Api Works Successfullyyy!!",
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

// in this Api I'll hide Specific Data With the use of condition/ projection
 
 const CondtionProjectionHide = async(req,res) =>{
            try {
                const Id = req.params._id;
                const HideTheData = await PostDelGetModel.findOne(
                    {_id:Id},
                    {FirstName:0,LastName:1,City:0}
                );
                res.json({
                    Message:"Api of ConditionPorjectionHide is Working Successfully!!",
                    Data:true,
                    Result:HideTheData
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
    GetTheSpecificData,
    DeleteTheSpecificId,
    ProjectionCondtion,
    CondtionProjectionHide

    
}