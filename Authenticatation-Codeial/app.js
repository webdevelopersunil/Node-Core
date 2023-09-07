const express = require('express');
const app = express();
const port = 8000;

// Set Templating Engine
app.set('view engine', 'ejs');
app.set('views', './views');

const expresslayouts = require("express-ejs-layouts");
app.use(expresslayouts);    // Server to let use this
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.set('layout','layouts/main');

// Static files path
app.use(express.static('./assets'));


// Routes to use
app.get('/', (req, res) => {
    res.render('home');
});


app.listen(port, (error) => {
    if(error){
        console.error(`Server error : ${error}`);
    }

    console.log(`Server is running on port : ${port}`);
})