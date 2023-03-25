const  {ProductPostTesting, NewFormTesting ,CustomerSales ,ProductGetTesting}= require("../Model/ProductPostTestModel");



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

const ApiOfDelete = async (req,res) =>{
     try {
        const Id= req.params._id;
     
        const IdToDel = await ProductGetTesting.findOne(
            {_id:Id}
        );
        
        if(!!IdToDel){
            const DeleteTheId = await ProductGetTesting.deleteOne(
                {_id:IdToDel._id},
            )
        }
        res.json({
            Message:"Api of Delete is Working",
            Data:true,
            Result:DeleteTheId
        })

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
    ApiOfDelete
}