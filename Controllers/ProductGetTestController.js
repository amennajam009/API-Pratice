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


    module.exports = {
        
        UserInfo
    }













