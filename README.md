# node
Node Js Project

# modules-working
In this directory modules is used to access the multip functions, that is defined in the operations file.

# fs : File System
dir : basichttpserver, being used the file system for print html file into the browser

# Nodemon
- Is a package which monitoring the changes into the files except the html file which is being rendering via file system readFile functions.
- It's auto restart the server once chnages detected.

# Extended to Multi Pages through Switch Routes
- being used res.url for identify the route and Switch case for multi page paths.
- for rendering page data used the fs(file system) function readFile.


# contact-list-express

# Contact List (Express JS)
- set-up running server using the express

# Rendered the Html from Express
- Rendered the text and html to the browser, It's auto detect the contect type to html

# ejs ( Template Emgine : Embeded JS )
- installed the ejs and rendered the ejs file.
- required to set the default template engine to let know the express framework.

# Middleware (app.use(express.urlencoder()))
- fetch the form data from req.body via parsing formdata
- multiple custom middle-ware

# Static files ( app.use(express.static('assets')) )
- css/js/images directories holds the files for styling HTML
- implemented css and js static files to the home.ejs file

# Mongo DB
- Mongoose Install
- Setup Config for connection with mongo DB
- Error handling for secure connection with mongo db


# CODEIAL ( A social application )
- Setted up node server and required repository
- Added script into the package.json file for the "ndoemon index.js".