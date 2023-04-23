const  {ProductPostTesting, NewFormTesting ,CustomerSales}= require("../Model/ProductPostTestModel");
const ProductGetTestModel = require("../Model/ProductGetTestModel");



const UserInfoToDel = async (req,res) =>{
     try {
        const Id = req.params._id;

        const DocToDel = await CustomerSales.findOne(
            {_id:Id}
        );
    
        if(!!DocToDel){
            const DeleteIt = await CustomerSales.deleteOne(
                {_id:DocToDel._id}
            )
            res.json({
                Message:"User Is Deleted Successfully!!",
                Data:true,
                Result: DeleteIt
            })
        }
      
     } catch (error) {
        res.json({
            Message:error.message,
            Data:false,
            Result:null
        })
     }
   
}

// again for pratice
const ApiOfDelete = async (req,res) =>{
     try {
        const Id= req.params._id;
     
        const IdToDel = await NewFormTesting.findOne(
            {_id:Id}
        );
        
        if(!!IdToDel){
            const DeleteTheId = await NewFormTesting.deleteOne(
                {_id:IdToDel._id},
            )
            res.json({
                Message:"Api of Delete is Working",
                Data:true,
                Result:DeleteTheId
            })
        }
     } catch (error) {
        res.json({
            Message:error.message,
            Data:false,
            Result:null
        })
     }
}

//again for pratice

const ApiDeleteId = async (req,res) =>{

    try {
        const Id= req.params._id;
        const IdToDel = await ProductGetTestModel.findOne(
            {_id:Id}
        );
        if(!!IdToDel){
            const LetDelTheUser = await ProductGetTestModel.deleteOne(
                {_id:IdToDel._id}
            );
            res.json({
                Message:"Api is working",
                Data:true,
                Result:LetDelTheUser

            })
        }

    } catch (error) {
        res.json({
            Message:error.message,
            Data:false,
            Result:null

        })
    }

}


const DelTheUser = async(req,res) =>{
     
    try {
        const Id=req.params._id;
        const FindtheId = await CustomerSales.findOne(
            {_id:Id}
        )
        if(!!FindtheId){
            const DeleteId = await CustomerSales.deleteOne(
                {_id:FindtheId._id}
            );
            res.json({
                Message:"The Api of delete is Working Successfully",
                Data:true,
                Result:DeleteId
            })
        }
    } catch (error) {
        res.json({
            Message:error.message,
            Data:false,
            Result:null
        })
    }
}

const AgainDelete =async (req,res) =>{
     try {
        const Id = req.params._id;
        const Testing2 = await CustomerSales.findOne(
            {_id:Id}
        )
        if (!!Testing2){
            const DeleteIt = await CustomerSales.deleteOne(
                {_id:Testing2._id}
            );
            res.json({
                Message:"The Api of AgainDelete Is working successfullyy!!",
                Data:true,
                Result:DeleteIt
            })
        }
     } catch (error) {
        res.json({
            Message:error.message,
            Data:false,
            Result:null
        })
     }
}



const AgainForPratice = async (req,res) =>{
    try {
        const Id = req.params._id;
        const Deleteagain = await CustomerSales.findOne(
            {_id:Id}
        )
        if(!!Deleteagain){
            const DeletingItAgain = await CustomerSales.deleteOne(
                {_id:Deleteagain._id}
            );
            res.json({
                Message:"Api is Working Successfully",
                Data:true,
                Result:DeletingItAgain
            })
        }
    } catch (error) {
        res.json({
            Message:error.message,
            Data:false,
            Result:error.message
        })
    }
}

module.exports={
    UserInfoToDel,
    ApiOfDelete,
    ApiDeleteId,
    DelTheUser,
    AgainDelete,
    AgainForPratice
}