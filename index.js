const http = require('http');
const port = 8000;
const fs = require('fs');

function requestHandler(req,res){
    console.log(req.url);
    res.writeHead(200,{'content-type':'text/html'});
    let filepath;
    switch (req.url) {
        case '/':
            filepath = './index.html'
            break;
        case '/home':
            filepath='./home.html'
            break;
    
        default:
            filepath='./404.html';
            break;
    }

    fs.readFile(filepath,function(err,data){
        if(err){
            console.log('Error: ',err);
            return ;
        }
        return res.end(data);
    });
}

var server = http.createServer(requestHandler);

server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('server is up and running at:',port);
});
