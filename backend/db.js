const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://mongodb:mongodb@crud-app.rlmp9k6.mongodb.net/?retryWrites=true&w=majority';
const connectToMongo = async ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;