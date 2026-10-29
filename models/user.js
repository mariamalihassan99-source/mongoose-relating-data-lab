const mongoose = require('mongoose')

// Schema
const userSchema = new mongoose.Schema({
    name:{
        type:String , 
        required: true,
        trim: true
    },
    password:{
        type:String,
        required: true,
        minlength: 6,
        maxlength: 8,
        
    }
},{timestamps: true})

// model
const User = mongoose.model('User', userSchema)

// export the model
module.exports = User   