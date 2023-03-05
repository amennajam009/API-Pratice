const addingtwonumber =  (req, res ,next) => {
    try {
        const { number1, number2 } = req.body;
        const result = number1+number2;
        res.json({
            Message:'You have Reached AddingTwoNumbers End Point',
            Result:result,
            Data:true
        })
    } catch (error) {
        res.json({
            Message:error.message,
            Result:null,
            Data:false
        })
    }
}


module.exports = {
    addingtwonumber,

    
}