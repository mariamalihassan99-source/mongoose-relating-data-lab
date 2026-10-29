// imports
const express = require("express") //importing express package
const app = express() // creates a express application
const dotenv = require("dotenv").config() //this allows me to use my .env values in this file
const mongoose = require("mongoose")
const methodOverride = require('method-override')
const morgan = require('morgan')


const User = require('./models/user')
const Listing = require('./models/Listing')
const Review = require('./models/Review')



// Middleware
app.use(express.static('public')); //all static files are in the public folder
app.use(express.urlencoded({ extended: false })); // this will allow us to see the data being sent in the POST or PUT
app.use(methodOverride('_method'))
app.use(morgan('dev'))


async function conntectToDB(){ //connection to the database
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to Database")
    }
    catch(error){
        console.log("Error Occured",error)
    }
}


conntectToDB()


















// Routes go here

async function testRelationship(){
    const newUser = await User.create({
        name: "maryam",
        password: 1234545
    })
    const newListing = await Listing.create({
        streetAddress: "123 Main St",
        city: "Sample City",
        price: 500,
        owner: newUser._id,
    })
}

testRelationship()  







 
 
 
 




app.listen(3000,()=>{
    console.log("Listening on port " + 3000)
}) // Listen on port 3000




