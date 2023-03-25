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





module.exports={
    UserInfoToDel,
    ApiOfDelete,
    ApiDeleteId
}