const express = require('express');
const port = 8000;
const app = express();

const path = require('path');

app.set('view engine', 'views');

app.set('views',path.join(__dirname,'views'));

app.use(express.static('./assets'));

app.use(express.urlencoded);




app.use('/', require('./routes/index'));



app.listen(port, function(err){
    if(err){
        console.log(`Something went wrong, Server not responding : ${err}`);
    }
    console.log(`Server is running, On port ${port}`);
})