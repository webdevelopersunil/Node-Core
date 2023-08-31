
const express = require('express');

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








// Returning Response From the Server 
app.get('/', function(req, res){

    // This is auto detect the html and set content-type:html by the Express JS
    // res.send("<h1>Cool, My server is running.</h1>")

    // Rendered the ejs file
    // In case of dynamic pass the value to the ejs file
    return res.render('home',{ title : 'Embeded Java Script' });

});












app.listen(port, function(err){
    if(err){
        console.log('Error occured during running the server', err);
    }
    console.log('My Express server running on the port :', port);
});