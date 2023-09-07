const express = require('express');
const app = express();
const port = 8000;

const expresslayouts = require('express-ejs-layouts');
// to tell Server to use this layouts
app.use(expresslayouts);
// Extract styles and script from sub-pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

const path = require('path');
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));



app.use('/', require('./routes/index'));





app.listen(port, function(err){
    if(err){
        // interpolation way to write the object with string
        // console.log('Server error :', err);
        console.log(`Server error : ${err}`);
    }

    console.log(`Server is running, On port : ${port}`);
})