const mongoose = require('mongoose')

// Schema
const categorySchema = new mongoose.Schema({
    categoryName:{
        type:String,
        required: true,
        trim: true ,
        minLength: 3 ,
        maxLength: 50
    }
},{
    timestamps: true
})

// model
const Category = mongoose.model('Category', categorySchema)

// export the model
module.exports = Category