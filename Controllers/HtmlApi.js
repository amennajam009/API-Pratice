const { json } = require('express');
const htmlModel = require('../Model/HtmlApi');


const MyHtmlApi = async (req, res) => {
    try {
        const htmltosend = `<h1>hello world</h1>`;
        const FirstName = req.body.FirstName; // Assuming FirstName is sent in the request body
        const LastName = req.body.LastName; // Assuming LastName is sent in the request body

        if (!FirstName || !LastName) {
            return res.status(400).json({
                data: false,
                message: 'Please provide FirstName and LastName in the request body',
                result: null
            });
        }

        const doctosave = new htmlModel({
            html: htmltosend,
            FirstName: FirstName,
            LastName: LastName
        });

        const savedDoc = await doctosave.save();

        res.json({
            data: true,
            message: 'API working successfully',
            result: savedDoc
        });
    } catch (error) {
        res.json({
            data: false,
            message: error.message,
            result: null
        });
    }
};


module.exports={
MyHtmlApi
}