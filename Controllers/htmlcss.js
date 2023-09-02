const {HtmlCssmodel} = require('../Model/htmlcss')
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



const interpolationhtmlcssApi =async(req,res) =>{
  try {
    const {firstname,lastname,country,address} = req.body;
    const Myhtml = `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${firstname}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${address}</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">${country}</a>
    <a href="#" class="card-link">${lastname}</a>
  </div>
</div>
    `
    const MappingData = await HtmlCssmodel.create({
        firstname,
        lastname,
        country,
        address,
        html:Myhtml
    })
    res.json({
        data:true,
        message:'api works successfully',
        result:MappingData
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
htmlcssApi,
interpolationhtmlcssApi
}