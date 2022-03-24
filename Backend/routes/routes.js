const express = require('express');
const router = express.Router();

const ObjectId = require('mongoose').Types.ObjectId;

const User = require('../models/user.js');



//API section 
//basepath== 'http://localhost:3000/users;

//GET API --start--
router.get('/',(req,res)=>{
    User.find((err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log('Error occured in fetching data:' + err);
        }
    })
});        
//GET API --end--





//GET BT ID API --start--
router.get('/:id',(req,res)=>{
    
    if(ObjectId.isValid(req.params.id)){
        User.findById(req.params.id,(err,doc)=>{
            if(!err){
                res.send(doc);
            }
            else{
                console.log('Error occured in fetching data:' + err);
            }
        })
    }
    else{
        return res.status(400).send('No such record found with ID:'+req.params.id);
    }
});
//GET BY ID API --end--



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




//DELETE/DELETE BY ID API --start--
router.delete('/:id',(req,res)=>{
    
    if(ObjectId.isValid(req.params.id)){
        User.findByIdAndRemove(req.params.id,(err,doc)=>{
            if(!err){
                res.send(doc);
            }
            else{
                console.log('Error occured in Deleting data:' + err);
            }
        })
    }
    else{
        return res.status(400).send('No such record found with ID:'+req.params.id);
    }
});
//GET BY ID API --end--



module.exports = router;