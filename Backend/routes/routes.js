const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

//API section 
//basepath== 'http://localhost:3000/users;

//Post API --start--
router.post('/',(req,res)=>{
    let user = new User({
        name : req.body.name,
        age : req.body.age,
        city : req.body.city
    });

    user.save((err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log('Error occured in posting data:' + err);
        }
    })
});
//Post API --end--


module.exports = router;