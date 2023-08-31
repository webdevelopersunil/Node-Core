const http = require('http');
const port = 8000;

// importing the file system to read the file
const fs = require('fs');

function requestHandler(req, res){

    console.log(req.url);

    res.writeHead(200, {'content-type': 'text/html'});

    // 1. Serving a Simple response to the Browser
    // res.end("<h1>Stop Here</h1>");

    // 2. Reading the file through the file system method
    // fs.readFile('./index.html', function(err, data){
    //     if(err){
    //         console.log(err);
    //         return res.end('<h1>Error!</h1>')
    //     }

    //     return res.end(data);
    // });

    // 3. Extending to MultiPages access using Switch Cases

    let filePath;
    
    switch(req.url){
        case '/':
            filePath = './index.html';
            break;
        case '/profile':
            filePath = './profile.html';
            break;
        default:
            filePath = './404.html';
            break;
    }

    fs.readFile(filePath, function(err, data){

        if(err){
            console.log('err', err);
            return res.end('<h1>Error!</h1>');
        }

        return res.end(data);

    })

}

const server = http.createServer(requestHandler);

server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log("Server is running on Port". port);
    return;
});