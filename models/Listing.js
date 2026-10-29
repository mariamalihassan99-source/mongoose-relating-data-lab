const mongoose = require('mongoose')

// Schema
const listingSchema = new mongoose.Schema({
   streetAddress:{
       type:String,
       required: true,
       trim: true,
       
   },
   city:{
       type:String,
       required: true,
       trim: true
   },
    price:{
        type:Number,
        required: true,
        min: 0,
        max: 1000
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    }   
    
},{timestamps: true})

// model
const Listing = mongoose.model('Listing', listingSchema)

// export the model
module.exports = Listing