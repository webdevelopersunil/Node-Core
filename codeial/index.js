const express = require('express');
const app = express();
const port = 8000;
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