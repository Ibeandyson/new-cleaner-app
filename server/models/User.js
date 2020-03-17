const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//created user schema
const UserSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength:3
    },
    email:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required:true
    },
    phone:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
    },
    files: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }

});
 
module.exports = User = mongoose.model("users", UserSchema);