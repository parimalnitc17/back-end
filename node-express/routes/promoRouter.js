const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type","text/html");
    next();
})
.get((req,res,next)=>{
    res.end('will send all the promotions to you !');
})
.post((req,res,next)=>{
    res.end('will add the promotions ' + req.body.name + ' with details: '+ req.body.description);
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end('put operation not supported');
})
.delete((req,res,next)=>{
    res.end('deleting all promotions');
});

promoRouter.route('/:promoId')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type","text/html");
    next();
})
.get((req,res,next)=>{
    res.end('Will send details of the dish: ' + req.params.promoId +' to you!');
})
.post((req, res, next)=>{
    res.statusCode = 403;
    res.end('POST operation not supported on /promotions/'+ req.params.promoId);
})
.put((req, res, next)=>{
    res.write('Updating the promotion: ' +req.params.promoId+ '\n');
    res.end('Will update the promotion: ' +req.body.name+' with details: ' +req.body.description);
})
.delete((req, res, next)=>{
    res.end('Deleting promotion: ' +req.params.promotionId);
});


module.exports = promoRouter;