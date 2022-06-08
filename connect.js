const mongoose = require('mongoose');
const carModel = require('./carModel');

    // require('dotenv').config()
    const dotenv = require('dotenv');
    dotenv.config();

    const DB_NAME = process.env.DB_NAME;
    const DB_PORT = process.env.DB_PORT;
    const DB_HOST = process.env.DB_HOST;

// const uri = "mongodb+srv://chakkour:unfarlife310@cluster0.wozd2.mongodb.net/carnava?retryWrites=true&w=majority"
const uri = `mongodb://${$DB_HOST}:${DB_PORT}/${DB_NAME}`;

mongoose.connect(uri);
const db = mongoose.connection;

db.once('open',async function (){
    console.log('connection successful');

    const cars = await carModel.find({
       

        
    },
    
    );
    console.log(cars)    

});