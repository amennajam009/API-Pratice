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

  const UserInfo3 = async(req,res)=>{
    try {
        const {FirstName,LastName,Email,Education,Age}=req.body;
        const UserModel = new ProductGetTestModel({
            FirstName,LastName,Email,Age,Education
        })
        const GetInfoagain= await UserModel.save();
        res.json({
            Message:'UserInfo3 Api works Successfully!!!',
            Data:true,
            Result:GetInfoagain
        })
    } catch (error) {
       res.json({
        Message:error.message,
        Data:false,
        Result:null
       }) 
    }
  }


//   now we'll find User From db By using it's unique Id in which we gonna use Condition 

const FindUserbyId = async (req,res)=>{
    try {
        const Id = req.params.Id;
        const Finduser = await ProductGetTestModel.findOne(
            {_id:Id} // condition
        )
        res.json({
            Message:"User Found Successfully!!",
            Data:true,
            Result:Finduser
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
        UserInfo,
        UserInfo2,
        UserInfo3,
        FindUserbyId
    }













