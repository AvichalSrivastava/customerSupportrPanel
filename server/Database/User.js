const mongoose = require('mongoose');
const user = new mongoose.Schema({
    userName:{ type : String},
    clientType:{type:String},
    email:{type:String},
    password:{type:String},
    loginLastDate:{type:String},
    approved:{type:Boolean}
});

module.exports = User = mongoose.model('client',user);
