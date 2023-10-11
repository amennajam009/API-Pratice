

// Api which only send the data

const DataToSendVariables = async (req,res) =>{
    try {
     const MyObject = {
        collection1:{
            id:1,
            name:"amen",
            age:21
        },
        collection2:{
            id:2,
            name:"amen2",
            age:21
        },
        collection3:{
           id:3,
           name:"amen3",
           age:21
        }
     }        
     res.send({
        data:MyObject
     })
    } catch (error) {
        res.send({
            data:null,
            message:error.message
        })
    }
}


module.exports = {
    DataToSendVariables
}