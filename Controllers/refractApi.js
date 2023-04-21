
const refractApiTesting = require('../Model/refractApi');


const PostrefractApi =async (req,res) =>{
    try {
        const {ProductHeading,Productdescription,ProductPrice} = req.body;
        const MappingMydata = new refractApiTesting({
            ProductHeading,Productdescription,ProductPrice
        });
        const DocToSnd = await MappingMydata.save();
        res.json({
            message:"Api of refractApi is working successfully!!",
            Data:true,
            Result:DocToSnd
        })
    } catch (error) {
        res.json({
            message:error.message,
            Data:false,
            Result:null
        })
    }
}


module.exports = {
    PostrefractApi
}