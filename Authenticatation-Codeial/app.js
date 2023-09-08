const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const db = require('./server/config/db');

// Set Templating Engine
app.set('view engine', 'ejs');
app.set('views', './views');

const expresslayouts = require("express-ejs-layouts");
app.use(expresslayouts);    // Server to let use this
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.set('layout','layouts/main');


// Parse URL-encoded bodies with extended mode (default)
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


// Static files path
app.use(express.static('assets'));

// Routes to use
app.use('/', require('./server/routes/home'));

app.listen(port, (error) => {
    if(error){
        console.error(`Server error : ${error}`);
    }

    console.log(`Server is running on port : ${port}`);
});