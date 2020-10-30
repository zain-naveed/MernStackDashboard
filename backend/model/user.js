const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type: Number,
        required: true
    },
    status:{
        type: Boolean,
        default: true,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now,
        required: true
    }
});
module.exports = mongoose.model('User',userSchema);