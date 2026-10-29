const mongoose = require('mongoose')

// Schema
const reviewSchema = new mongoose.Schema({
    reviewTitle:{
        type:String,
        required: true,
        trim: true
    },
    reviewBody:{
        type:String,
        required: true,
        trim: true
    },
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
},{
    timestamps: true
})

// model
const Review = mongoose.model('Review', reviewSchema)

// export the model
module.exports = Review