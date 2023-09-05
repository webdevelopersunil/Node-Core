// required the mongoose package
const mongoose = require('mongoose');

// connected to the database
mongoose.connect('mongodb://localhost/contact_list_db');

// accesing the database Acquire the connection to check if it is successfull
const db = mongoose.connection;

// Error
db.on('error', console.error.bind(console, 'error connecting to db'));

// If conection is success
db.once('open', function(){
    console.log('Successfully connected to the database');
});