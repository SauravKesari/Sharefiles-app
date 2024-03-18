const mongoose = require('mongoose');
require('dotenv').config();
function connectDB(){

    mongoose.connect(process.env.URL);


    const connection = mongoose.connection;

    if(connection != null){
        console.log('Database connected!');
    }
    else{
        console.log('connection failed');
    }


}

module.exports = connectDB;
