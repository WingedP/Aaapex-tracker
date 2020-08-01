const express = require('express');
const morgan = require("morgan"); 
const dotenv = require("dotenv"); 

dotenv.config({path:'./config.env'});
const port = process.env.PORT || 8000;
const app = express();

//dev logging
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

//profile routes
app.use('/api/v1/profile', require('./routes/profile'))

//handle production
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static(__dirname + '/public'));
    //handle SPA
    app.get(/.*/,(req,res)=> res.sendFile(__dirname + '/public/index.html'));
}


app.listen(port,()=>{console.log(`Server listening on ${process.env.NODE_ENV} mode on port ${port}!`)});
