const  {ProductPostTesting, NewFormTesting ,CustomerSales}= require("../Model/ProductPostTestModel");
// const NewFormTesting =require ("../Model/NewFormTesting")


const PostProductData = async (req,res) =>{

    try {
        const {ProductName,ProductQuantity,ProductPrice,color,LogoMaterial,EnterDescription} = req.body;
        const UserNewModel = new ProductPostTesting({
            ProductName,ProductQuantity,ProductPrice,color,LogoMaterial,EnterDescription
        })
        const GetInfo = await UserNewModel.save();
        res.json({
            Message:' PostProductData Api Works Successfully!!!',
            Data:true,
            Result:GetInfo
        })
       
    } catch (error) {
        res.json({
            error: error.message,
            data: false,
            result: null
        })
     }
    }

 
const FormApi = async (req,res) =>{
    try {
        const {FirstName,LastName,Email,phone,Address,YourMessage} = req.body;

        const SaveFormInfo = new NewFormTesting ({
            FirstName,LastName,Email,phone,Address,YourMessage
        })
        const DocToSave = await SaveFormInfo.save();
        res.json({
            Message:'Youe new form Api is working',
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


const CustomerInfo =async (req,res)=>{
     try {
        const {FirstName,Sales,ProductType,Company,Contact,country, month} = req.body;

        const InfoToSave = new CustomerSales ({
            FirstName,Sales,ProductType,Company,Contact,country, month
        })

        const DocToSave = await InfoToSave.save();
        res.json({
            Message:'Your Api of CustomerInfo is Working',
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
    PostProductData,
    FormApi,
    CustomerInfo,
    UserInfoToDel
}