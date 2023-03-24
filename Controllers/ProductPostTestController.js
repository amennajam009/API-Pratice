const ProductPostTestModel = require("../Model/ProductPostTestModel");


const PostProductData = async (req,res) =>{

    try {
        const {ProductName,ProductQuantity,ProductPrice,color,LogoMaterial,EnterDescription} = req.body;
        const UserNewModel = new ProductPostTestModel({
            ProductName,ProductQuantity,ProductPrice,color,LogoMaterial,EnterDescription
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




module.exports={
    PostProductData
}