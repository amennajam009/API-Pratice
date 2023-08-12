const { json } = require('express');
const {htmlModel2, HtmlModel3} = require('../Model/HtmlApi');


// const MyHtmlApi = async (req, res) => {
//     try {
//         const htmltosend = `<h1>hello world</h1>`;
//         const FirstName = req.body.FirstName; // Assuming FirstName is sent in the request body
//         const LastName = req.body.LastName; // Assuming LastName is sent in the request body

//         if (!FirstName || !LastName) {
//             return res.status(400).json({
//                 data: false,
//                 message: 'Please provide FirstName and LastName in the request body',
//                 result: null
//             });
//         }

//         const doctosave = new htmlModel({
//             html: htmltosend,
//             FirstName: FirstName,
//             LastName: LastName
//         });

//         const savedDoc = await doctosave.save();

//         res.json({
//             data: true,
//             message: 'API working successfully',
//             result: savedDoc
//         });
//     } catch (error) {
//         res.json({
//             data: false,
//             message: error.message,
//             result: null
//         });
//     }
// };



const MyHtmlApi2 =async(req,res) =>{
try {
    const MyHtml = `<h1>Hello World</h1>
                    <p>This is my first Api
                    In which i'm sending the
                    Html 
                    <h2>Wish me Luck!!</h2>
                    LOL</p>`
    const {firstname , lastname ,MultideminalArray} = req.body;
    const Mappingdoc = await htmlModel2.create({
        html:MyHtml,
        firstname,
        lastname,
        MultideminalArray
    });
    res.json({
        data:true,
        message:'HTML Api Works',
        result: Mappingdoc
    })
} catch (error) {
    res.json({
        data:false,
        message:error.message,
        result:null
    })
}
}


const AnotherHtmlApi =async (req,res) =>{
    try {
        const {firstname , lastname , country} = req.body;
        const MyHtml = `<h1>Hello world</h1>
                         <p>This is my second Api
                         In which i'm sending The 
                         Html through Api</p>`
        const MappingData = await HtmlModel3.create({
            firstname,
            lastname,
            country,
            html : MyHtml
        })
        res.json({
            data:true,
            message:'Api works',
            result: MappingData
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
MyHtmlApi2,
AnotherHtmlApi
}