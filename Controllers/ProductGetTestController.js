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

const FindUserbyId2 = async (req,res)=>{
    try {
        const Id = req.params.id;
        const FindUser2 = await ProductGetTestModel.findOne(
            {_id:Id}, //condition
        )
        res.json({
            Message:"User2 Found Successfully!",
            Data:true,
            Result:FindUser2
        })
    } catch (error) {
        res.json({
            message:error.message,
            Data:false,
            Result:null
        })
    }
}


//this will find and show us all the data which is in our db because we're using .find() query 
const GetAllProductData =async (req,res) =>{
        try {
            // const Id=req.params._id;
            const FindallData = await ProductGetTestModel.find();
            res.json({
                Message:'Here are all the productData',
                Data:true,
                Result:FindallData
            })
            
        } catch (error) {
            res.json({
                Message:error.message,
                Data:false,
                Result:null
            })
        }
}

  //again writting this Api for practice 
  
  const WannaFindalldataAgin = async (req,res) =>{
     try {
        
        const AllData = await ProductGetTestModel.find();
        res.json({
            message:'You Find All the data',
            Data:true,
            Result:AllData
        })
     } catch (error) {
        res.json(
            {
                message:error.message,
                Data:false,
                Result:null
            }
        )
     }
  }


//   now i'll find the Data with the use of Id
 
  const FindDataById = async (req,res) => {
       try {
          const Id = req.params._id;
          const FindById = await ProductGetTestModel.findOne(
            {_id:Id}   //condition
             )
          res.json({
            message:"Here the specific Id",
            Data:true,
            Result:FindById
          })
       } catch (error) {
          res.json({
            Message:error.message,
            Data:false,
            Result:null
          })
       }
  }

//   again writting it for practice 

  const FindDataByIdagain = async (req,res) =>{
    try {
        const Id= req.params._id;
        const FindData = await ProductGetTestModel.findOne(
            {_id:Id} //condition
        )
        res.json({
           Message:'Here the UserInfo',
           Data:true,
           Result:FindData 
        })
    } catch (error) {
        res.json({
            Messsage:error.message,
            Data:false,
            Result:null
        })
    }

  }
  
  // In this Api now i'll Get User specific info/selected Info with the use of condition/projection

    const FindSpecificThing =async (req,res) =>{
        try {
            const Id=req.params._id;
            const specificThing = await ProductGetTestModel.findOne(
                {_id:Id}, //condition
                {FirstName:1} //projection
            )
            res.json({
                Message:"FindSpecificThing Api works!!",
                Data:true,
                Result:specificThing,
            })
        } catch (error) {
            res.json({
                Message:error.message,
                Data:false,
                Result:null
            })
        }

    }

    // Again making Api in which i use condition /projection

    const FindagainSpecificThing = async (req,res) =>{

        try {
            const Id=req.params._id;
            const Findthething = await ProductGetTestModel.findOne(
                {_id:Id}, //conditon
                {FirstName:1 , LastName:1 , Email:1} //projection
            )
            res.json({
                Message:'Api works Successfully!!',
                Data:true,
                Result:Findthething
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
        FindUserbyId,
        FindUserbyId2,
        GetAllProductData,
        WannaFindalldataAgin,
        FindDataById,
        FindDataByIdagain,
        FindSpecificThing,
        FindagainSpecificThing

    }













