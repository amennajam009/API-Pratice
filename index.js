const express=require('express');
const cors= require('cors')
require('dotenv').config();
// const PORT = process.env.PORT  ;



// initinzaing 
const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.raw());
app.use(cors());


app.all('*', (req, res, next) => {
    // This is how we protect the api
    res.header('Access-Control-Allow-Origin', '*');// So it make the header allow to the origin when cross platfrom try to exchange the data
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
        //Mehtod is a property which help us to use the Methods by request. Browers send the options request before your Mthods request
    }
    next();
     //if nothing of the response sent back so next() means other rou
});


const _ProductTestingController=require('./Routes/ProductTestRoute');




// using Routes
app.use( "/ProductTesting" ,_ProductTestingController);

// define PORT
const PORT = process.env.PORT || 6000
const server =  app.listen(PORT, () => {
    console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});



// handle unhandle promise rejection
process.on('unhandledRejection', (err, promise) => {

    console.log(`Error: ${err.message}`)
  
    // close server & exit process
    server.close(() => process.exit(1))
  })