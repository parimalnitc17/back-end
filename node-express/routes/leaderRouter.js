const express = require('express');
const bodyParser = require('body-parser');

const leaderRoute = express.Router();
leaderRoute.use(bodyParser.json());

leaderRoute.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type","text/html");
    next();
})
.get((req,res,next)=>{
    res.end('Will send all the leaders to you!');
})
.post((req,res,next)=>{
    res.end('will add the leaders '+req.body.name+ ' with details: '+req.body.description);
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end('put operation not supported');
})
.delete((req,res,next)=>{
    res.end('deleting all leaders');
});

leaderRoute.route('/:leaderId')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type","text/html");
    next();
})
.get((req,res,next)=>{
    res.end('Will send details of the leader: ' + req.params.leaderId +' to you!');
})
.post((req, res, next)=>{
    res.statusCode = 403;
    res.end('POST operation not supported on /leader/'+ req.params.leaderId);
})
.put((req, res, next)=>{
    res.write('Updating the leader: ' + req.params.leaderId + '\n');
    res.end('Will update the leader: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete((req, res, next)=>{
    res.end('Deleting leader: ' + req.params.leaderId);
});


module.exports = leaderRoute;