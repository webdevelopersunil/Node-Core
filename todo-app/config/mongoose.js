const mongoose = require('mongoose');

// include mongoose in our project and open a connection to the todos
mongoose.connect("mongodb://localhost:27017/todos");

// accesing the database Acquire the connection to check if it is successfull
const db = mongoose.connection;

// Error
db.on('error', console.error.bind(console, 'error connecting to db'));

// If conection is success
db.once('open', function(){
    console.log('Successfully connected to the database');
});