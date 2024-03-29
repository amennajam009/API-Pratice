const ProductModelSchema =require('../Model/ImageApi')
const fs=require('fs')






const ProductData=async (req,res )=>{
    try {
        const{ProductName,ProductPrice,LogoMaterial,EnterDescription,ProductQuantity,color}=req.body
        let ImageDetails=[]
        // let Size=selectSize.split(',')
        if (req.files && req.files.length > 0) {
            req.files.forEach(element => {
              const {filename,orignalname,mimetype}=element
              ImageDetails.push({
                ImageUrl:`assets/Product/${ProductName}/${filename}`,
                ImageName:orignalname,
                ImageMimeType:mimetype
              })
            });
          } else {
            // handle the case where no files were uploaded
          }
        // creating collection in database 
        const documentoCraete=  new ProductModelSchema({
            ProductName,ProductPrice,EnterDescription,ProductQuantity,LogoMaterial,color,
            ImageDetail:ImageDetails
        })
        // if data is saved this will be the response 
        const documentoSave=await documentoCraete.save();
        res.json({
            message:"Data SentSuccessful ",
            data:true,
            Body:documentoSave
        })
    } catch (error) {
      res.json({
        message: error.message,
        Result: null,
        Data: false
      })
    }
    }


    module.exports={
        ProductData
    }