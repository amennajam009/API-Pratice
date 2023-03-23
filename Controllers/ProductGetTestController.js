const ProductGetTestModel = require("../Model/ProductGetTestModel");


const UserInfo = async (req,res) =>{

    try {
        const {FirstName,LastName,Email} = req.body;
        const UserNewModel = new ProductGetTestModel({
            FirstName,LastName,Email
        })
        const GetInfo = await UserNewModel.save();
        res.json({
            Message:'UserInfo Api Works Successfully!!!',
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


  const UserInfo2 = async(req,res)=>{
    try {
        const {FirstName,LastName,Email,Education}=req.body;
        const UserModel = new ProductGetTestModel({
            FirstName,LastName,Email,Education
        })
        const GetMoreInfo = await UserModel.save();
        res.json({
            Message:"UserInfo2 Api works successfully!!!",
            Data:true,
            Result:GetMoreInfo
        })
    } catch (error) {
        res.json({
            Message:error.message,
            Data:false,
            Result:null,
        })
    }
  }






    module.exports = {
        UserInfo,
        UserInfo2
    }













