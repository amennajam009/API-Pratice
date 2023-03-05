const addingtwonumber =  (req, res) => {
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


const subtractTwonumber = (req,res)=>{
    try {
        const {number1,number2} = req.body;
        const result = number1-number2;
        res.json({
          Message : 'Api of subtract is working',
          Result:result,
          Data:true
        })
    } catch (error) {
       res.json({
        Message: 'Api of Subtract is not working',
        Result:null,
        Data:false
       })        
    }
}


const DividingTwonumber = (req,res)=>{
    try {
        const {number1,number2}= req.body;
        const result= number1/number2;
        res.json({
            Message:'Api of diving two number is working',
            Result:result,
            Data:true
        })
    } catch (error) {
      res.json({
        Message:'Api of diving two number is not working',
        Result:null,
        Data:false
      })        
    }
}

module.exports = {
    addingtwonumber,
    subtractTwonumber,
    DividingTwonumber

    
}