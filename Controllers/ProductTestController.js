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

const multiplyTwonumber = (req,res)=>{
    try {
        const {number1,number2}=req.body;
        const result = number1*number2;
        res.json({
            message:'API of multiply two numbers is working',
            Result:result,
            Data:true
        })
    } catch (error) {
        res.json({
            message:'API of multiply two number is not working',
            Result:null,
            Data:true
        })
    }
}

const AddandSub = (req,res)=>{
    try {
        const {number1,number2,number3}=req.body;
        const result = number1+number2-number3;
        res.json({
            message:'API of add+sub three number is working',
            Result:result,
            Data:true
        })
    } catch (error) {
        res.json({
            message:'API of add+sub three number is not working',
            Result:null,
            Data:false
        })
    }
}

const DividingAndMulti = (req,res)=>{
    try {
        const {number1,number2,number3}=req.body;
        const result = number1/number2*number3;

        res.json({
            message:'API of Divid+multi three number is working',
            Result:result,
            Data:true
        })
    } catch (error) {
        res.json({
            message:'API of Divid+multi three number is not working ',
            Result:null,
            Data:false
        })
    }
}

// API's Using For Loop

const Printnumbers1To10 = (req,res)=>{
  try {
     let result = '';
     for (i=1; i<=10;i++){
        result+=i+'';
     }
     
     res.json({
        message:'Api of For loop is working',
        Result:result,
        Data:true
     })
  } catch (error) {
    res.json({
        message:'Api of For loop is not working',
        Result:null,
        Data:false
    })
  }
}

module.exports = {
    addingtwonumber,
    subtractTwonumber,
    DividingTwonumber,
    multiplyTwonumber,
    AddandSub,
    DividingAndMulti,
    Printnumbers1To10
    
}