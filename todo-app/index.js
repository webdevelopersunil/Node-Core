const express = require('express');
const db = require('./config/mongoose');

// require the path module from the express
const path = require('path');

// Set the port for runnung the server
const port = 8000;

// calling express here as a function, This app function will have the all functionality which needed to run a Server.
const app = express();

// set-up the ejs to using this template engine as default template engine
app.set('view engine','ejs');

// setting here the views folder path
app.set('views', path.join(__dirname,'views'));

// middleware for parsing the form data
app.use(express.urlencoded());

//Connecting assets to ejs (css,js,images and js libraries)
app.use(express.static('assets'));




// Added routes as middleware call here
app.use('/', require('./routes/index'));





app.listen(port, function(err){
    if(err){
        console.log(`Something went wrong, Server not responding : ${err}`);
    }
    console.log(`Server is running, On port ${port}`);
})