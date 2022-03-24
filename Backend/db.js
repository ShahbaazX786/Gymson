const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/thegymsonDB', (err)=>{
    if(!err){
        console.log("Connection to DB successful!");
    }
    else{
        console.log("Error while connecting to DB!!");
    }
});

module.exports=mongoose;