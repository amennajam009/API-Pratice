const HtmlCssmodel = require('../Model/htmlcss')
const {Html,Css} = require('../htmlCss/htmlcss')

const htmlcssApi =async (req,res) =>{
    try {
        const {firstname,lastname,address,country}= req.body;
        const Mappingdata = await HtmlCssmodel.create({
            firstname,
            lastname,
            country,
            address,
            html:Html,
            css:Css
        })
        res.json({
            data:true,
            message:'Api works successfully',
            result:Mappingdata
        })
         
    } catch (error) {
        res.json({
            data:false,
            message:error.message,
            result:null
        })
    }
}


module.exports={
htmlcssApi
}