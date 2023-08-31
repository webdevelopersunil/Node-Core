
const express = require('express');
const port = 8000;

// calling express here as a function, This app function will have the all functionality which needed to run a Server.
const app = express();



// Returning Response From the Server 
app.get('/', function(req, res){

    // This is auto detect the html and set content-type:html by the Express JS
    res.send("<h1>Cool, My server is running.</h1>")
});












app.listen(port, function(err){

    if(err){
        console.log('Error occured during running the server', err);
    }

    console.log('My Express server running on the port :', port);
});