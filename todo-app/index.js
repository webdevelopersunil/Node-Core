const express = require('express');
const port = 8000;
const app = express();






app.listen(port, function(err){
    if(err){
        console.log(`Something went wrong, Server not responding : ${err}`);
    }
    console.log(`Server is running, On port ${port}`);
})