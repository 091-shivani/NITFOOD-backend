const mongoose = require('mongoose')     //search mongoose schema
const { Schema } =mongoose;              //destructing in js   //call back funtionality in js
const UserSchema = new Schema({         //read about models 
    name:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    is_verified:{
        type:String,
        default:'0'
    },
});
 module.exports = mongoose.model('user', UserSchema)     //whenever it is used, user named collection will be created inside your db                                     
