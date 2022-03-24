const mongoose = require('mongoose');

const User = mongoose.model('User',{
    name:{type:String},
    age:{type:String},
    city:{type:String}
})

module.exports = User;