
const express = require('express');
const port = 8000;

// calling express here as a function, This app function will have the all functionality which needed to run a Server.
const app = express();
















app.listen(port, function(err){

    if(err){
        console.log('Error occured during running the server', err);
    }

    console.log('My Express server running on the port :', port);
});