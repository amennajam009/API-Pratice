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



module.exports = {
    PostTheData
    
}