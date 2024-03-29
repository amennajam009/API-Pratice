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
        result+=i+ ','+'';
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

const PrintOddnumber = (req,res)=>{
    try {
        let result = '';
        for(i=1;i<=50;i++){
            
            if(i%2 !==0){
                result+=i+ ','+'';
                console.log(i);
            }
        }
        res.json({
            message:'API of Oddnumber is working',
            Result:result,
            Data:true
        })
    } catch (error) {
        res.json({
            message:'Api of Oddnumber is not working',
            Result:null,
            Data:false
        })
    }
}

const PrintEvennumber = (req,res)=>{
    try {
        let result = '';
        for (i=1;i<=50;i++){
            if(i%2 ===0){
                result+=i+','+'';
                console.log(i);
            }
        }
        res.json({
            message:'Api of Even-number is working',
            Result:result,
            Data:true
        })
    } catch (error) {
        res.json({
            message:'Api of Even-number is not working',
            Result:null,
            Data:false
        })
    }
}

//This Api tells wether the number is odd or even 
const IsnumOddEven = (req,res)=>{
    try {
        const { number } = req.body;
        const result = `${number} is ${number % 2 === 0 ? 'even' : 'odd'}`;
        res.json({
            message:'Api of OddEven is working',
            Number : result,
            Data:true

        })
    } catch (error) {
        res.json({
            message:'Api of OddEven is not working',
            Number: null,
            Data:false
        })
    }
}

const FizzBuzz = (req,res)=>{
    try {
        const {number} = req.body;
        const result = `${number} is ${number % 3 ===0 && number % 5=== 0 ? 'Fizz' :'Buzz'}`;
        res.json({
            message:'API of fizzbuzz is working',
            Number : result,
            Data:true
        })
    } catch (error) {
        res.json({
            message:'API of fizzbuzz is not working',
            Number:null,
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
    Printnumbers1To10,
    PrintOddnumber,
    PrintEvennumber,
    IsnumOddEven,
    FizzBuzz
    
}