const  {ProductPostTesting, NewFormTesting ,CustomerSales}= require("../Model/ProductPostTestModel");



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

module.exports={
    UserInfoToDel
}