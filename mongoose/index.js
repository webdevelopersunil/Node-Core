
const express = require('express');

// require the path module from the express
const path = require('path');

// Set the port for runnung the server
const port = 8000;

// require the mongoose config connection here
const db = require('./config/mongoose');

const Contact = require('./models/Contact');

// calling express here as a function, This app function will have the all functionality which needed to run a Server.
const app = express();

// set-up the ejs to using this template engine as default template engine
app.set('view engine','ejs');

// setting here the views folder path
app.set('views', path.join(__dirname,'views'));

// middleware for parsing the form data
app.use(express.urlencoded());

// Middleware for static files like (css,js,images and js libraries)
app.use(express.static('assets'));

// Custom Middleware 1
app.use( function(req, res, next){
    req.myname = "Sunil";
    // console.log("Middleware 1 is being called!")
    next();
});

// Custom Middleware 2
app.use( function(req, res, next){
    console.log("Middleware 2 is being called!", req.myname)
    next();
});


var contactList = [
    {
        name : 'Sunil',
        phone : 7878787878
    },
    {
        name : 'AK',
        phone : 7984328953
    },
    {
        name : 'DK',
        phone : 78675646345
    },
];




// Returning Response From the Server 
app.get('/', function(req, res){

    // This is auto detect the html and set content-type:html by the Express JS
    // res.send("<h1>Cool, My server is running.</h1>")

    Contact.find({

    }).then(contacts => {
        return res.render('home',{
            title : 'E Java Script',
            contact_list : contacts
        });
    }).catch(err => {
        console.log('error in creating a contact:', err);
        return res.status(500).send('Internal Server Error'); // Handle the error as needed
    });

    // Rendered the ejs file
    // In case of dynamic pass the value to the ejs file
    // return res.render('home',{
    //     title : 'E Java Script',
    //     contact_list : contactList
    // });

});

app.get('/practice', function(req, res){
    return res.render('practice', {title : "let us play here"});
});

// Post method for the dubmit form for name and phone number
app.post('/create-contact', function (req, res){

    // form data is stored by parser into request body
    console.log(req.body);

    //push the submit contact details
    // contactList.push({
    //     name : req.body.name,
    //     phone : req.body.phone
    // });


    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    })
    .then(newContact => {
        console.log('@@@@@@@', newContact);
        return res.redirect('back');
    })
    .catch(err => {
        console.log('error in creating a contact:', err);
        return res.status(500).send('Internal Server Error'); // Handle the error as needed
    });
    

    // return res.redirect('/');

    // This back keyword will redirect back to the same page with udated results
    // return res.redirect('back');

});


// route for deleting contact, uses params url for
app.get('/delete-contact/:id', function(req,res){

    // get the query from the url
    let id = req.params.id;

    // Finding the index number if the number is match with the selected phone number
    // let contactIndex = contactList.findIndex(contact => contact.phone == phone);

    // if(contactIndex != -1){
        // contactList.splice(contactIndex, 1);
    // }

    // return res.redirect('back');


    Contact.findByIdAndDelete(id)
    .then(deletedContact => {
        
        if (!deletedContact) {
            // Handle the case where the contact with the given ID was not found
            return res.status(404).send('Contact not found');
        }
        console.log('@@@@@@@', deletedContact);
        return res.redirect('back');
    })
    .catch(err => {
        console.log('error in deleting a contact:', err);
        return res.status(500).send('Internal Server Error'); // Handle the error as needed
    });
});









app.listen(port, function(err){
    if(err){
        console.log('Error occured during running the server', err);
    }
    console.log('My Express server running on the port :', port);
});